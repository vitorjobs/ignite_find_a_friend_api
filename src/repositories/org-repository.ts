import { Org, Prisma, } from "@prisma/client";

export interface OrgRepository {
  // findById(id: string): Promise<Org | null>
  create(data: Prisma.OrgCreateInput): Promise<Org>
  findByCnpj(cnpj: string): Promise<Org | null>
  findByEmail(email: string): Promise<Org | null>
  findAllOrgs(): Promise<Org[]>;
}
