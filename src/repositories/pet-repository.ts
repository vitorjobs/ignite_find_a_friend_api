import { Pet, Prisma, } from "@prisma/client";

export interface PetRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
  findByCity(cidade: string): Promise<Pet[]>;
  searchPets(params: {
    cidade: string;
    nome?: string;
    idade?: string;
    energia?: string;
    porte?: string;
  }): Promise<Pet[]>;
  // findById(id: string): Promise<Pet | null>;
  // findByOrgId(orgId: string): Promise<Pet[]>;
  // findByName(name: string): Promise<Pet | null>;
  // update(id: string, data: Prisma.PetUpdateInput): Promise<Pet>;
  // delete(id: string): Promise<void>;
  // Additional methods can be added as needed
  // For example:
  // findAll(): Promise<Pet[]>;
  // findByCnpj(cnpj: string): Promise<Pet | null>;
  // findByEmail(email: string): Promise<Pet | null>;           
  // findById(id: string): Promise<PetRepository | null>;
  // update(id: string, data: Prisma.OrgUpdateInput): Promise<PetRepository>;
  // delete(id: string): Promise<void>;     
}
