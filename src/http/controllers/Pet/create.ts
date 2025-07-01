import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"
import { makeCreatePetUseCase } from "../../../use-cases/pet/factories/make-create-pet-use-case"
import { PetGeneralError } from "../../../use-cases/pet/error/pet-general-erros"

export async function create(request: FastifyRequest, reply: FastifyReply) {

  const registerBodySchema = z.object({
    nome: z.string(),
    descricao: z.string(),
    idade: z.string(),
    energia: z.string(),
    porte: z.string(),
    requisitos: z.string(),
    cidade: z.string(),
  })

  const {
    nome,
    descricao,
    idade,
    energia,
    porte,
    requisitos,
    cidade,

  } = registerBodySchema.parse(request.body)

  try {
    const registerUseCase = makeCreatePetUseCase()
    await registerUseCase.execute({
      nome,
      descricao,
      idade,
      energia,
      porte,
      requisitos,
      cidade,
      orgId: request.user.sub

    })
  } catch (err) {
    if (err instanceof PetGeneralError) {
      return reply.status(400).send({
        message: err.message,
      });
    }
    throw err
  }
  return reply.status(201).send()
}