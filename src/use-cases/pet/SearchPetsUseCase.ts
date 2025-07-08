import { Pet } from '@prisma/client';
import { PetRepository } from '../../repositories/pet-repository';
import { NoCityInformedError } from './error/no-city-informed-error';

// Define a interface para os parâmetros de entrada do Use Case.
// É importante que essa interface reflita exatamente o que o Use Case espera,
// e que seja compatível com a interface do método searchPets do repositório.
// Note que 'cidade' é obrigatório aqui, conforme a regra de negócio.
interface SearchPetsUseCaseRequest {
  cidade: string; // Obrigatório pela regra de negócio
  nome?: string;
  idade?: 'FILHOTE' | 'ADULTO' | 'IDOSO'; // Usar os ENUMs do Prisma, se aplicável
  energia?: string; // Usar o tipo numérico se for uma escala
  porte?: 'PEQUENO' | 'MEDIO' | 'GRANDE' | 'GIGANTE'; // Usar os ENUMs do Prisma, se aplicável
  // Adicione outros filtros que você tenha no seu schema.prisma, como nivelIndependencia, tipoAnimal, etc.
}

// Define a interface para a resposta do Use Case.
interface SearchPetsUseCaseResponse {
  pets: Pet[];
}

export class SearchPetsUseCase {
  constructor(private petsRepository: PetRepository) { }

  async execute({
    cidade,
    nome,
    idade,
    energia,
    porte,
  }: SearchPetsUseCaseRequest): Promise<SearchPetsUseCaseResponse> {

    if (!cidade) {
      throw new NoCityInformedError();
    }

    const pets = await this.petsRepository.searchPets({
      cidade,
      nome,
      idade,
      energia,
      porte,
    });

    return { pets };
  }
}