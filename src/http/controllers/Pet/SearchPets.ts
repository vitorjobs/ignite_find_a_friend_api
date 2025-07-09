import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"
import { PetGeneralError } from "../../../use-cases/pet/error/pet-general-erros"
import { MakeSearchPetsUseCase } from "../../../use-cases/pet/factories/make-search-pets-use-case"

export async function SearchPets(request: FastifyRequest, reply: FastifyReply) {

  const registerBodySchema = z.object({
    cidade: z.string(),
    descricao: z.string().optional(),
    idade: z.string().optional(),
    energia: z.string().optional(),
    porte: z.string().optional(),
  })
  const {
    cidade,
    descricao,
    idade,
    energia,
    porte,

  } = registerBodySchema.parse(request.body)

  let pets
  try {
    const registerUseCase = MakeSearchPetsUseCase()
    const result = await registerUseCase.execute({
      cidade,
      descricao,
      idade,
      energia,
      porte,
    })
    pets = result.pets
  } catch (err) {
    if (err instanceof PetGeneralError) {
      return reply.status(400).send({
        message: err.message,
      });
    }
    throw err
  }
  return reply
    .status(200)
    .send(
      pets
    )
}