import { Prisma, Pet } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export class PrismaPetRepository implements PrismaPetRepository {

  async create(data: Prisma.PetUncheckedCreateInput): Promise<Pet> {
    const pet = await prisma.pet.create({
      data,
    });
    return pet;
  }

}