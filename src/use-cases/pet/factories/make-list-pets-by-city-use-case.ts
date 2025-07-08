import { PrismaPetRepository } from "../../../repositories/prisma/prisma-pet-repository"
import { ListPetsByCityUseCase } from "../listPetsByCityUseCase"

export function MakeListPetsByCityUseCase() {
  const PetRepository = new PrismaPetRepository()
  const useCase = new ListPetsByCityUseCase(PetRepository)

  return useCase
}
