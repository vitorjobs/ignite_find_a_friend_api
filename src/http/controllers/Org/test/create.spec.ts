import request from 'supertest'
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { app } from '../../../../app';
// import { EmailAlreadyExistsError } from '../../../../use-cases/org/error/org-email-exists';

describe('Register (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to register a new org', async () => {
    const response = await request(app.server)
      .post('/org')
      .send({
        cnpj: "98.765.432/0001-11",
        password: "Zx8Cv7Bn",
        nome: "Beta Distribuidora SA",
        email: "vendas@betadist.com.br",
        contato: "(21) 99876-5432",
        endereco: "Rua das Laranjeiras, 200, Laranjeiras, Rio de Janeiro, RJ"
      })

    expect(response.statusCode).toEqual(201)
  })

  it('should not be able to register with duplicate CNPJ', async () => {
    // Primeiro registro
    await request(app.server)
      .post('/org')
      .send({
        cnpj: "12.345.678/0001-99",
        password: "Zx8Cv7Bn",
        nome: "Org Teste",
        email: "teste@org.com",
        contato: "(21) 99999-9999",
        endereco: "Rua Teste, 123"
      })

    // Tentativa de registro com mesmo CNPJ
    const response = await request(app.server)
      .post('/org')
      .send({
        cnpj: "12.345.678/0001-99",
        password: "Zx8Cv7Bn",
        nome: "Outra Org",
        email: "outra@org.com",
        contato: "(21) 98888-8888",
        endereco: "Rua Outra, 456"
      })

    expect(response.statusCode).toEqual(409)
    expect(response.body).toEqual({
      message: 'Ong Já Cadastrada'
    })
  })

  it('should not be able to register with duplicate email', async () => {
    // Primeiro registro
    await request(app.server)
      .post('/org')
      .send({
        cnpj: "11.111.111/0001-11",
        password: "Zx8Cv7Bn",
        nome: "Org Teste",
        email: "email@duplicado.com",
        contato: "(21) 99999-9999",
        endereco: "Rua Teste, 123"
      })

    // Tentativa de registro com mesmo email
    const response = await request(app.server)
      .post('/org')
      .send({
        cnpj: "22.222.222/0001-22",
        password: "Zx8Cv7Bn",
        nome: "Outra Org",
        email: "email@duplicado.com",
        contato: "(21) 98888-8888",
        endereco: "Rua Outra, 456"
      })

    expect(response.statusCode).toEqual(409)
    expect(response.body).toEqual({
      message: 'Email Já Cadastrado'
      // Se quiser verificar o tipo do erro, faça isso em outro teste ou ajuste a resposta da API para incluir um identificador de erro, se necessário.
    })
  })

  it('should not be able to register with invalid email format', async () => {
    const response = await request(app.server)
      .post('/org')
      .send({
        cnpj: "33.333.333/0001-33",
        password: "Zx8Cv7Bn",
        nome: "Org Inválida",
        email: "email-invalido",
        contato: "(21) 97777-7777",
        endereco: "Rua Inválida, 789"
      })

    expect(response.statusCode).toEqual(400)
  })

  it('should not be able to register with password less than 6 characters', async () => {
    const response = await request(app.server)
      .post('/org')
      .send({
        cnpj: "44.444.444/0001-44",
        password: "12345",
        nome: "Org Senha Curta",
        email: "senha@curta.com",
        contato: "(21) 96666-6666",
        endereco: "Rua Curta, 101"
      })

    expect(response.statusCode).toEqual(400)
  })

  it('should not be able to register with missing required fields', async () => {
    const response = await request(app.server)
      .post('/org')
      .send({
        cnpj: "55.555.555/0001-55",
        // Faltando nome
        email: "campo@faltando.com",
        contato: "(21) 95555-5555",
        endereco: "Rua Faltando, 202"
        // Faltando password
      })

    expect(response.statusCode).toEqual(400)
  })
})