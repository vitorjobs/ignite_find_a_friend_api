import { prisma } from "../../lib/prisma";
import { OrgRepository } from "../org-repository";
// import { OrgRepository } from "../";

export class PrismaOrgRepository implements OrgRepository {
  // async findById(id: string) {
  //   const org = await prisma.org.findUnique({
  //     where: {
  //       id,
  //     },
  //   });
  //   return org;
  // }

  // // findById(id: string): Promise<org | null> {
  // //   throw new Error("Method not implemented.");
  // // }

  async create(data: { cnpj: string; nome: string; email: string; contato: string; endereco: string; password_hash: string }) {
    const org = await prisma.org.create({
      data: {
        id: 'user-1',
        cnpj: data.cnpj,
        nome: data.nome,
        email: data.email,
        contato: data.contato,
        endereco: data.endereco,
        password_hash: data.password_hash
      },
    });
    return org;
  }

  async findByCnpj(cnpj: string) {
    const org = await prisma.org.findUnique({
      where: {
        cnpj,
      },
    });
    return org;
  }
}