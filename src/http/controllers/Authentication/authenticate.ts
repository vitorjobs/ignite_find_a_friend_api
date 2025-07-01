import { FastifyReply, FastifyRequest } from 'fastify'

import { z } from 'zod'
import { InvalidCredentialsError } from '../../../use-cases/authentication/errors/invalid-credentials-erros'
import { makeAuthenticateUseCase } from '../../../use-cases/authentication/factories/make-authenticate-use-case'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateBodySchema = z.object({
    cnpj: z.string(),
    password: z.string().min(6),
  })

  const { cnpj, password } = authenticateBodySchema.parse(request.body)

  try {
    const authenticateUseCase = makeAuthenticateUseCase()

    const { org } = await authenticateUseCase.execute({
      cnpj,
      password,
    })

    const token = await reply.jwtSign(
      // {
      //   role: org.cnpj,
      // },
      {},
      {
        sign: {
          sub: org.id,
        },
      },
    )

    const refreshToken = await reply.jwtSign(
      // {
      //   role: org.cnpj,
      // },
      {},
      {
        sign: {
          sub: org.id,
          expiresIn: '7d',
        },
      },
    )

    return reply
      .setCookie('refreshToken', refreshToken, {

        path: '/',
        secure: true,
        sameSite: true,

        httpOnly: true,
      })
      .status(200)
      .send({
        token,
      })

  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message })
    }

    throw err
  }
}
