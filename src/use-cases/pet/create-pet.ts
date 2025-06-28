import { Pet } from "@prisma/client"
import { PetRepository } from "../../repositories/pet-repository"

interface CreatePetUseCaseRequest {
  orgId: string,
  nome: string,
  descricao: string,
  idade: string,
  energia: string,
  porte: string,
  requisitos: string,
  cidade: string,
}

interface CreatePetUseCaseReponse {
  pet: Pet
}

export class CreatePetUseCase {

  constructor(
    private petRepository: PetRepository,
  ) { }
  async execute({
    orgId,
    nome,
    descricao,
    idade,
    energia,
    porte,
    requisitos,
    cidade,
  }:
    CreatePetUseCaseRequest): Promise<CreatePetUseCaseReponse> {

    const pet = await this.petRepository.create({
      org_id: orgId,
      nome,
      descricao,
      idade,
      energia,
      porte,
      requisitos,
      cidade,
    })

    return {
      pet,
    }
  }
}
