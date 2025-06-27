// import { Gym } from "@prisma/client"
import { Org } from "@prisma/client"
import { OrgRepository } from "../../repositories/org-repository"
import { OrgAlreadyExistsError } from "./error/org-already-exists"

interface CreateOrgUseCaseRequest {
  cnpj: string
  nome: string
  email: string
  contato: string
  endereco: string
}

interface CreateGymUseCaseReponse {
  org: Org
}

export class CreateOrgUseCase {

  constructor(private orgRepository: OrgRepository) { }

  async execute({
    cnpj,
    nome,
    email,
    contato,
    endereco
  }:
    CreateOrgUseCaseRequest): Promise<CreateGymUseCaseReponse> {

    const orgExists = await this.orgRepository.findByCnpj(cnpj)
    if (orgExists) {
      throw new OrgAlreadyExistsError()
    }

    const org = await this.orgRepository.create({
      cnpj,
      nome,
      email,
      contato,
      endereco
    })

    return {
      org,
    }
  }
}
