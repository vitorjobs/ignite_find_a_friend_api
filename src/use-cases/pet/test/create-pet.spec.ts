import { describe, expect, it, beforeEach } from "vitest";
import { InMemoryPetRepository } from "./in-memory/in-memory-respository";
import { CreatePetUseCase } from "../create-pet";

let petRepository: InMemoryPetRepository;
let sut: CreatePetUseCase;

describe('Create Pet Use Case', () => {

  beforeEach(() => {
    petRepository = new InMemoryPetRepository();
    sut = new CreatePetUseCase(petRepository);
  });

  it('should be able to create a new org', async () => {
    // Dados de exemplo para criar um pet
    const petData = {
      orgId: 'org-123456',
      nome: 'Rex',
      descricao: 'Cão dócil e brincalhão, ótimo para famílias.',
      idade: '2 anos',
      energia: 'Alta',
      porte: 'Médio',
      requisitos: 'Espaço para correr, tempo para passeios diários',
      cidade: 'São Paulo',
    };

    const { pet } = await sut.execute(petData);

    // Verifica se o pet foi criado corretamente
    expect(pet).toBeDefined();
    // Verifica se o ID do pet é uma string, indicando que foi gerado com sucesso
    expect(pet.id).toEqual(expect.any(String));

  });

});