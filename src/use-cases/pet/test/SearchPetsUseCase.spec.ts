import { describe, it, expect, beforeEach } from "vitest";
import { SearchPetsUseCase } from "../SearchPetsUseCase";
import { NoCityInformedError } from "../error/no-city-informed-error";
import { Pet } from "@prisma/client";

// Filtros para busca de pets
interface SearchPetsFilters {
  cidade: string;
  nome?: string;
  idade?: string;
  energia?: string;
  porte?: string;
}

// Mock do PetRepository
class InMemoryPetRepository {
  public pets: Pet[] = [];

  async searchPets(filters: SearchPetsFilters): Promise<Pet[]> {
    return this.pets.filter((pet) => {
      if (filters.cidade && pet.cidade !== filters.cidade) return false;
      if (filters.nome && pet.nome !== filters.nome) return false;
      if (filters.idade && pet.idade !== filters.idade) return false;
      if (filters.energia && pet.energia !== filters.energia) return false;
      if (filters.porte && pet.porte !== filters.porte) return false;
      return true;
    });
  }
}

describe("Pet Search Use Case", () => {
  let petRepository: InMemoryPetRepository;
  let sut: SearchPetsUseCase;

  beforeEach(() => {
    petRepository = new InMemoryPetRepository();
    sut = new SearchPetsUseCase(petRepository as never);
    // Dados fakes
    petRepository.pets = [
      {
        id: "1",
        org_id: "org-1",
        nome: "Rex",
        descricao: "Cão dócil",
        idade: "FILHOTE",
        energia: "Alta",
        porte: "MEDIO",
        requisitos: "Espaço para correr",
        cidade: "São Paulo",
      } as Pet,
      {
        id: "2",
        org_id: "org-2",
        nome: "Luna",
        descricao: "Gata calma",
        idade: "ADULTO",
        energia: "Média",
        porte: "PEQUENO",
        requisitos: "Ambiente tranquilo",
        cidade: "São Paulo",
      } as Pet,
      {
        id: "3",
        org_id: "org-3",
        nome: "Thor",
        descricao: "Cachorro protetor",
        idade: "IDOSO",
        energia: "Baixa",
        porte: "GRANDE",
        requisitos: "Espaço amplo",
        cidade: "Rio de Janeiro",
      } as Pet,
    ];
  });

  it("should return pets filtered by city when only city is provided", async () => {
    const { pets } = await sut.execute({ cidade: "São Paulo" });
    expect(pets).toHaveLength(2);
    expect(pets.map(p => p.nome)).toEqual(expect.arrayContaining(["Rex", "Luna"]));
  });

  it("should return pets filtered by city and size when both filters are provided", async () => {
    const { pets } = await sut.execute({ cidade: "São Paulo", porte: "PEQUENO" });
    expect(pets).toHaveLength(1);
    expect(pets[0].nome).toBe("Luna");
  });

  it("should throw NoCityInformedError when city parameter is empty", async () => {
    await expect(() => sut.execute({ cidade: "" })).rejects.toBeInstanceOf(NoCityInformedError);
  });

  it("should return empty array when no pets match the search criteria", async () => {
    const { pets } = await sut.execute({ cidade: "Curitiba" });
    expect(pets).toHaveLength(0);
  });
});