import { FastifyRequest, FastifyReply } from "fastify"
import { PetGeneralError } from "../../../use-cases/pet/error/pet-general-erros"
import { makeListOrgUseCase } from "../../../use-cases/org/factories/make-list-org-use-case"

export async function listOrg(request: FastifyRequest, reply: FastifyReply) {


  let orgs
  try {
    const registerUseCase = makeListOrgUseCase()
    const result = await registerUseCase.execute()

    orgs = result.org
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
      orgs
    )
}