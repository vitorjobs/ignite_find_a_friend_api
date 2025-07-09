import { PrismaPetRepository } from "../../../repositories/prisma/prisma-pet-repository"
import { SearchPetsUseCase } from "../SearchPetsUseCase"

export function MakeSearchPetsUseCase() {
  const PetRepository = new PrismaPetRepository()
  const useCase = new SearchPetsUseCase(PetRepository)

  return useCase
}
