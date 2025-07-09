import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { app } from '../../../../app';
import { InvalidCredentialsError } from '../../../../use-cases/authentication/errors/invalid-credentials-erros';


describe('Register (e2e)', () => {

  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('Should be able to authentication', async () => {
    await request(app.server)
      .post('/org')
      .send({
        cnpj: "98.765.432/0001-11",
        password: "Zx8Cv7Bn",
        nome: "Beta Distribuidora SA",
        email: "vendas@betadist.com.br",
        contato: "(21) 99876-5432",
        endereco: "Rua das Laranjeiras, 200, Laranjeiras, Rio de Janeiro, RJ"
      })

    const response = await request(app.server)
      .post('/auth')
      .send({
        cnpj: "98.765.432/0001-11",
        password: "Zx8Cv7Bn",
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body).toEqual({
      token: expect.any(String),
    })
  })


  it('should return 400 when both email and password are wrong', async () => {
    await request(app.server)
      .post('/org')
      .send({
        cnpj: "98.765.432/0001-11",
        password: "Zx8Cv7Bn",
        nome: "Beta Distribuidora SA",
        email: "vendas@betadist.com.br",
        contato: "(21) 99876-5432",
        endereco: "Rua das Laranjeiras, 200, Laranjeiras, Rio de Janeiro, RJ"
      })

    const response = await request(app.server)
      .post('/auth')
      .send({
        cnpj: "98.765.432/0001-13",
        password: "Zx8Cv7Bo",
      })

    expect(response.statusCode).toEqual(400)
    expect(response.body).toEqual({
      message: new InvalidCredentialsError().message
    })
  })

  it('should return 404 for unexpected errors', async () => {
    const response = await request(app.server)
      .post('/auths')
      .send({
        "cnpj": "98.765.432/0001-11",
        "password": "Zx8Cv7B"
      })
    expect(response.statusCode).toEqual(404)
  })
})
