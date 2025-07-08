import { Pet } from "@prisma/client"
import { PetRepository } from "../../repositories/pet-repository"
import { ListPetsByCityEmptyError } from "./error/list-pets-error"
import { NoCityInformedError } from "./error/no-city-informed-error"

interface ListPetsByCityUseCaseRequest {
  cidade: string,
}

interface ListPetsByCityUseCaseReponse {
  pet: Pet[]
}

export class ListPetsByCityUseCase {

  constructor(
    private petRepository: PetRepository,
  ) { }

  async execute({ cidade }:
    ListPetsByCityUseCaseRequest): Promise<ListPetsByCityUseCaseReponse> {

    if (!cidade) {
      throw new NoCityInformedError
    }

    const pets = await this.petRepository.findByCity(cidade)

    if (!pets || pets.length === 0 || pets === undefined || pets === null) {
      throw new ListPetsByCityEmptyError
    }

    return {
      pet: pets
    }
  }
}
