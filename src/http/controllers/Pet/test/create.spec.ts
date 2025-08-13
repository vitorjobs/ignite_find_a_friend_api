import request from 'supertest'
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { app } from '../../../../app';

describe('Create Pet (e2e)', () => {
  const testOrg = {
    cnpj: "98.765.432/0001-11",
    password: "Zx8Cv7Bn",
    nome: "Beta Distribuidora SA",
    email: "vendas@betadist.com.br",
    contato: "(21) 99876-5432",
    endereco: "Rua das Laranjeiras, 200, Laranjeiras, Rio de Janeiro, RJ"
  }

  let token: string

  // Helper para criar organização
  const registerOrg = async () => {
    return request(app.server)
      .post('/org')
      .send(testOrg)
  }

  // Helper para autenticar e pegar token
  const authenticate = async () => {
    const res = await request(app.server)
      .post('/auth')
      .send({
        cnpj: testOrg.cnpj,
        password: testOrg.password,
      })

    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('token')
    return res.body.token
  }

  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(async () => {
    // Criar organização e autenticar antes de cada teste que precise de token
    await registerOrg()
    token = await authenticate()
  })

  it('should authenticate successfully and return a token', async () => {
    expect(token).toEqual(expect.any(String))
  })

  it('should register a new pet successfully when authorized', async () => {
    const res = await request(app.server)
      .post('/pet/create')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nome: "Mel",
        descricao: "Gata dócil e sociável",
        idade: "2",
        energia: "Média",
        porte: "Pequeno",
        cidade: "Belo Horizonte",
        requisitos: "Gosta de companhia"
      })

    expect(res.statusCode).toBe(201)
    // expect(res.body).toMatchObject({
    //   id: expect.any(String),
    //   nome: "Mel"
    // })
  })

  it('should return 401 when trying to register a pet without token', async () => {
    const res = await request(app.server)
      .post('/pet/create')
      .send({
        nome: "Mel",
        descricao: "Gata dócil e sociável",
        idade: "2",
        energia: "Média",
        porte: "Pequeno",
        requisitos: "Gosta de companhia"
      })

    expect(res.statusCode).toBe(401)
  })
})
