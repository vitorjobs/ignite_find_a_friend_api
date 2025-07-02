import { describe, expect, it, beforeEach } from "vitest";
import { InMemoryPetRepository } from "./in-memory/in-memory-respository";
import { CreatePetUseCase } from "../create-pet";

let petRepository: InMemoryPetRepository;
let sut: CreatePetUseCase;


describe('List Pets By City Use Case', () => {
  beforeEach(() => {
    petRepository = new InMemoryPetRepository();
    sut = new CreatePetUseCase(petRepository);
  });

  it('should be able to create a new pet', async () => {
    // Dados de exemplo para criar um pet
    const petsData = [
      {
        orgId: 'org-123456',
        nome: 'Rex',
        descricao: 'Cão dócil e brincalhão, ótimo para famílias.',
        idade: '2 anos',
        energia: 'Alta',
        porte: 'Médio',
        requisitos: 'Espaço para correr, tempo para passeios diários',
        cidade: 'São Paulo',
      },
      {
        orgId: 'org-123457',
        nome: 'Luna',
        descricao: 'Gata calma e carinhosa, ótima companhia.',
        idade: '1 ano',
        energia: 'Média',
        porte: 'Pequeno',
        requisitos: 'Ambiente tranquilo, brinquedos',
        cidade: 'São Paulo',
      },
      {
        orgId: 'org-123458',
        nome: 'Thor',
        descricao: 'Cachorro protetor e leal.',
        idade: '3 anos',
        energia: 'Alta',
        porte: 'Grande',
        requisitos: 'Espaço amplo, exercícios diários',
        cidade: 'Rio de Janeiro',
      },
    ];

    // Cria todos os pets
    for (const petData of petsData) {
      await sut.execute(petData);
    }

    // Busca os pets criados na cidade de São Paulo
    const pets = await petRepository.findByCity('São Paulo');
    // Verifica se os pets foram encontrados
    expect(pets).toBeDefined();
    // Verifica se o número de pets encontrados é igual ao número de pets criados
    expect(pets.length).toBe(2); // Espera 2 pets na cidade de São Paulo

  });

});