import fastifyJwt from "@fastify/jwt";
import { env } from "./env";
import fastify from "fastify";
import { ZodError } from "zod";
import fastifyCookie from '@fastify/cookie'
import { setupMetrics } from "./prometheus/metrics";
import { orgRoutes } from "./http/controllers/Org/routes";
import { appRoutes } from "./http/healthcheck/routes";
import { petRoutes } from "./http/controllers/Pet/routes";
import { authRoutes } from "./http/controllers/Authentication/routes";

export const app = fastify()
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
  sign: {
    expiresIn: '10m',
  },
})

app.register(fastifyCookie)
app.register(orgRoutes)
app.register(petRoutes)
app.register(appRoutes)
app.register(authRoutes)
setupMetrics(app);

app.get('/about', () => {
  return {
    Projeto: "🚀 SOLID API - Find a Frind",
    Tecnologias: "✨ Plataforma Node | Liguagem Javascript | Bibliotecas",
    Documentação: "🎯 Criada via SWAGGER",
    Dependencies: {
      fastify: '4.0.0',
      prisma: '3.0.0',
      bcryptjs: '2.4.3',
      env: env.NODE_ENV || 'development',
      supertest: '6.1.6',
      vitest: '0.0.1',
    },
  }
})
// FUNÇÃO GLOBAL PARA TARTAR ERROS NA APLICAÇÃO

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() })
  }

  if (env.NODE_ENV != "productions") {
    console.log(error)
  } else {
    // TODO FAZER LOGO COM FERRAMENTA DE LOG
  }
  return reply.status(500).send({})
})	
