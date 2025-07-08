import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"
import { PetGeneralError } from "../../../use-cases/pet/error/pet-general-erros"
import { MakeListPetsByCityUseCase } from "../../../use-cases/pet/factories/make-list-pets-by-city-use-case"

export async function listPetsByCity(request: FastifyRequest, reply: FastifyReply) {

  const registerBodySchema = z.object({
    cidade: z.string(),
  })

  const { cidade } = registerBodySchema.parse(request.body)

  let pets
  try {
    const registerUseCase = MakeListPetsByCityUseCase()
    const result = await registerUseCase.execute({
      cidade,
    })
    pets = result.pet
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