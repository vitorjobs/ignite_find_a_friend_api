// import { Gym } from "@prisma/client"
import { Org } from "@prisma/client"
import { OrgRepository } from "../../repositories/org-repository"
import { OrgAlreadyExistsError } from "./error/org-already-exists"
import { hash } from "bcryptjs"
import { EmailAlreadyExistsError } from "./error/org-email-exists"

interface CreateOrgUseCaseRequest {
  cnpj: string
  nome: string
  email: string
  contato: string
  endereco: string
  password: string
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
    endereco,
    password
  }:
    CreateOrgUseCaseRequest): Promise<CreateGymUseCaseReponse> {

    const [orgExists, emailExists] = await Promise.all([
      this.orgRepository.findByCnpj(cnpj),
      this.orgRepository.findByEmail(email),
    ]);

    if (orgExists) {
      throw new OrgAlreadyExistsError();
    }

    if (emailExists) {
      throw new EmailAlreadyExistsError();
    }

    const password_hash = await hash(password, 6)

    const org = await this.orgRepository.create({
      cnpj,
      nome,
      email,
      contato,
      endereco,
      password_hash,
    })

    return {
      org,
    }
  }
}
