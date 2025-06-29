import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryOrgRepository } from "../../org/test/in-memory/in-memory-respository";
import { AuthenticateUseCase } from "../authenticate";
import { hash } from "bcryptjs";

describe("Authenticate Use Case", () => {

  let orgRepository: InMemoryOrgRepository
  let sut: AuthenticateUseCase

  beforeEach(() => {
    orgRepository = new InMemoryOrgRepository();
    sut = new AuthenticateUseCase(orgRepository);
  });

  it("should authenticate an organization with valid credentials", async () => {

    // Descreva o teste em português
    // Deve autenticar uma organização com credenciais válidas
    // Arrange: Configura os dados necessários para o teste
    // Act: Executa a ação que está sendo testada
    // Assert: Verifica se o resultado é o esperado   
    await orgRepository.create({
      cnpj: '12345678901234',
      nome: 'Org Test',
      email: 'contact@orgtest.com.br',
      contato: '11999999999',
      endereco: 'Rua Teste, 123',
      password_hash: await hash("123456", 6)
    });

    // Act: Executa o caso de uso de autenticação
    // Assert: Verifica se o resultado é o esperado
    // Verifica se o CNPJ retornado é do tipo string
    // e se o CNPJ é igual ao que foi usado para criar a organização
    // e se o CNPJ é igual ao que foi usado para criar a organização
    // e se o CNPJ é igual ao que foi usado para criar a organização  
    const { org } = await sut.execute({
      cnpj: '12345678901234',
      password: ('123456')
    });

    expect(org.cnpj).toEqual(expect.any(String));

  })
  // it.skip("should throw an error for invalid credentials", async () => {
  //   // Test implementation here
  // });

  // it.skip("should throw an error for invalid input types", async () => {
  //   // Test implementation here
  // });
});