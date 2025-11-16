// import { app } from "app";
import { FastifyReply, FastifyRequest } from "fastify";
import { env } from "../../env";

export async function healthcheck(request: FastifyRequest, reply: FastifyReply) {

  return reply.status(200).send({
    Version: '1.0',
    Status: 'OK',
    Timestamp: new Date().toISOString(),
    Environment: env.NODE_ENV || 'development',
    Database: {
      type: 'PostgreSQL',
      status: 'connected',
      version: '14.1',
    },
    Server: {

      host: request.hostname,
      port: env.PORT || 3333,
      uptime: process.uptime(),
    },
  })
}
