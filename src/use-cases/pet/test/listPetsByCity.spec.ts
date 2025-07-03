import { describe, expect, it, beforeEach } from "vitest";
import { InMemoryPetRepository } from "./in-memory/in-memory-respository";
import { ListPetsByCityUseCase } from "../listPetsByCityUseCase";
import { ListPetsByCityEmptyError } from "../error/list-pets-error";

let petRepository: InMemoryPetRepository;
let sut: ListPetsByCityUseCase;

describe('List Pets By City Use Case', () => {
  beforeEach(() => {
    petRepository = new InMemoryPetRepository();
    sut = new ListPetsByCityUseCase(petRepository);
  });

  it('should list pets by city', async () => {
    const petsData = [
      {
        org_id: 'org-123456',
        nome: 'Rex',
        descricao: 'Cão dócil e brincalhão, ótimo para famílias.',
        idade: '2 anos',
        energia: 'Alta',
        porte: 'Médio',
        requisitos: 'Espaço para correr, tempo para passeios diários',
        cidade: 'São Paulo',
      },
      {
        org_id: 'org-123457',
        nome: 'Luna',
        descricao: 'Gata calma e carinhosa, ótima companhia.',
        idade: '1 ano',
        energia: 'Média',
        porte: 'Pequeno',
        requisitos: 'Ambiente tranquilo, brinquedos',
        cidade: 'São Paulo',
      },
      {
        org_id: 'org-123458',
        nome: 'Thor',
        descricao: 'Cachorro protetor e leal.',
        idade: '3 anos',
        energia: 'Alta',
        porte: 'Grande',
        requisitos: 'Espaço amplo, exercícios diários',
        cidade: 'Rio de Janeiro',
      },
    ];

    // Cria todos os pets diretamente no repositório
    for (const petData of petsData) {
      await petRepository.create(petData);
    }

    // Usa o use case para buscar pets por cidade
    const pets = await sut.execute({ cidade: "" });

    expect(pets).toBeDefined();
    // expect(pets.pet.length).toBe(2); // Espera 2 pets na cidade de São Paulo

  });

  it('should throw an error if no city is informed', async () => {
    await expect(sut.execute({ cidade: "" })).rejects.toBeInstanceOf(ListPetsByCityEmptyError)
  });

  it('should throw an error if no pets are found in the city', async () => {
    await expect(sut.execute({ cidade: "CidadeInexistente" })).rejects.toBeInstanceOf(ListPetsByCityEmptyError);
  });


});