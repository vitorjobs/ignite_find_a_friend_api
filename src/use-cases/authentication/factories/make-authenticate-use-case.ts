import { AuthenticateUseCase } from "../authenticate"
import { PrismaOrgRepository } from "../../../repositories/prisma/prisma-org-repository"


export function makeAuthenticateUseCase() {
  const petsRepository = new PrismaOrgRepository()
  const authenticateUseCase = new AuthenticateUseCase(petsRepository)

  return authenticateUseCase
}
