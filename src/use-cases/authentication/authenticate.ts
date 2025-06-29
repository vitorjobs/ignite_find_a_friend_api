import { Org } from "@prisma/client";
import { OrgRepository } from "../../repositories/org-repository";
import { InvalidCredentialsError } from "./errors/invalid-credentials-erros";
import { InvalidTypeTextError } from "./errors/invalid-type-text";
import { compare } from "bcryptjs";

interface AuthenticateUseCaseRequest {
  cnpj: string,
  password: string
}

interface AuthenticateUseCaseResponse {
  org: Org
}

export class AuthenticateUseCase {
  constructor(
    private OrgRepository: OrgRepository,
  ) { }

  async execute({ cnpj, password }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {

    const org = await this.OrgRepository.findByCnpj(cnpj)

    if (cnpj === null || typeof cnpj !== 'string' || password === null || typeof password !== 'string') {
      throw new InvalidTypeTextError();
    }

    if (!org) {
      throw new InvalidCredentialsError()
    }
    const doesPasswordMatches = compare(password, org.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return { org }
  }
}
