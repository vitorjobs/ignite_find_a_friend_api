import { PrismaPetRepository } from "../../../repositories/prisma/prisma-pet-repository"
import { CreatePetUseCase } from "../create-pet"

export function makeCreatePetUseCase() {
  const PetRepository = new PrismaPetRepository()
  const useCase = new CreatePetUseCase(PetRepository)

  return useCase
}
