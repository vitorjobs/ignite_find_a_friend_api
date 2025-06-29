import { Prisma } from "@prisma/client";
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

  async create(data: Prisma.OrgCreateInput) {
    const org = await prisma.org.create({
      data,
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
  async findByEmail(email: string) {
    const org = await prisma.org.findUnique({
      where: {
        email,
      },
    });
    return org;
  }
}