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

    await orgRepository.create({
      cnpj: '12345678901234',
      nome: 'Org Test',
      email: 'contact@orgtest.com.br',
      contato: '11999999999',
      endereco: 'Rua Teste, 123',
      password_hash: await hash("123456", 6)
    });

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