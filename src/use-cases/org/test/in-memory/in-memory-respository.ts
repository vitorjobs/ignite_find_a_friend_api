import { Org, Prisma } from "@prisma/client";
import { OrgRepository } from "../../../../repositories/org-repository";
import { randomUUID } from "node:crypto";

export class InMemoryOrgRepository implements OrgRepository {
  public items: Org[] = []

  async create(data: Prisma.OrgCreateInput): Promise<Org> {
    const org = {
      id: randomUUID(),
      nome: data.nome,
      cnpj: data.cnpj,
      email: data.email,
      contato: data.contato,
      endereco: data.endereco,
      password_hash: data.password_hash,
    }

    this.items.push(org)
    return org
  }

  async findByCnpj(cnpj: string) {
    const org = this.items.find((item) => item.cnpj === cnpj)

    if (!org) {
      return null
    }

    return org
  }


}