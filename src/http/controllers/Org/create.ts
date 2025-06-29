import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"
import { makeCreateOrgUseCase } from "../../../use-cases/org/factories/make-create-org-use-case"
import { OrgAlreadyExistsError } from "../../../use-cases/org/error/org-already-exists"
import { EmailAlreadyExistsError } from "../../../use-cases/org/error/org-email-exists"

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    cnpj: z.string().min(14, "CNPJ must be at least 14 characters long"),
    nome: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    contato: z.string(),
    endereco: z.string(),
    password: z.string().min(6)

  })

  // Extrai dados do corpo da requisição e valida os campos usando um schema Zod pré-definido)
  const {
    cnpj,
    nome,
    email,
    contato,
    endereco,
    password
  } = registerBodySchema.parse(request.body)

  try {
    const registerUseCase = makeCreateOrgUseCase()
    await registerUseCase.execute({
      cnpj,
      nome,
      email,
      contato,
      endereco,
      password
    })
  } catch (err) {

    if (err instanceof OrgAlreadyExistsError || err instanceof EmailAlreadyExistsError) {
      return reply.status(409).send({
        message: err.message,
      });
    }
    throw err
  }
  return reply.status(201).send()
}
