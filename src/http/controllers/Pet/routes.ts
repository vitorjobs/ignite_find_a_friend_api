import { FastifyInstance } from "fastify";
import { create } from "./create";
import { verifyJwt } from "../../middlewares/verify-jwt";

export async function petRoutes(app: FastifyInstance) {
  app.post('/pet/create', { onRequest: [verifyJwt] }, create);
}
