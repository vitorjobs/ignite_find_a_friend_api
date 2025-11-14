import { PrismaOrgRepository } from '../../../repositories/prisma/prisma-org-repository'
import { ListOrgUseCase } from '../list-org'

export function makeListOrgUseCase() {
  const orgRepository = new PrismaOrgRepository()
  const useCase = new ListOrgUseCase(orgRepository)

  return useCase
}
