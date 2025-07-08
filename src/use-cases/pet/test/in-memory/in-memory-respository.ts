import { Pet, Prisma } from "@prisma/client";
import { PetRepository } from "../../../../repositories/pet-repository";
import { randomUUID } from "node:crypto";

export class InMemoryPetRepository implements PetRepository {

  public items: Pet[] = []

  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = {
      id: randomUUID(),
      nome: data.nome,
      descricao: data.descricao ?? null,
      idade: data.idade ?? null,
      energia: data.energia ?? null,
      porte: data.porte ?? null,
      requisitos: data.requisitos ?? null,
      cidade: data.cidade,
      org_id: data.org_id
    }
    this.items.push(pet)
    return pet
  }

  async findByCity(cidade: string): Promise<Pet[]> {
    return this.items.filter(pet => pet.cidade === cidade)
  }

  async searchPets(params: {
    cidade?: string;
    nome?: string;
    idade?: string;
    energia?: string;
    porte?: string;
  }): Promise<Pet[]> {
    const { cidade, nome, idade, energia, porte } = params;

    return this.items.filter(pet => {
      return (
        (!cidade || pet.cidade === cidade) &&
        (!nome || pet.nome.toLowerCase().includes(nome.toLowerCase())) &&
        (!idade || pet.idade === idade) &&
        (!energia || pet.energia === energia) &&
        (!porte || pet.porte === porte)
      );
    });
  }
}