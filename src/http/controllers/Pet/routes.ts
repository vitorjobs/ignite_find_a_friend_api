import { FastifyInstance } from "fastify";
import { listPetsByCity } from "./listPetsByCity";
import { create } from "./create";
import { verifyJwt } from "../../middlewares/verify-jwt";
import { SearchPets } from "./SearchPets";

export async function petRoutes(app: FastifyInstance) {
  app.post('/pet/create', { onRequest: [verifyJwt] }, create);
  app.post('/pet/list-by-city', listPetsByCity);
  app.post('/pet/search-by-city', SearchPets);
}
