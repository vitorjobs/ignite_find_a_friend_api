// import { Gym } from "@prisma/client"
import { Org } from "@prisma/client"
import { OrgRepository } from "../../repositories/org-repository"

interface ListOrgUseCaseReponse {
  org: Org[]
}

export class ListOrgUseCase {

  constructor(private orgRepository: OrgRepository) { }

  async execute(
  ): Promise<ListOrgUseCaseReponse> {


    const org = await this.orgRepository.findAllOrgs()

    return {
      org,
    }
  }
}
