import { FastifyInstance } from "fastify";
import { create } from "./create";
import { listOrg } from "./listOrgs";

export async function orgRoutes(app: FastifyInstance) {
  app.post('/org', create);
  app.get('/org', listOrg);
}
