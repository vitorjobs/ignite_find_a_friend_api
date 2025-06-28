// import { describe, expect, it, beforeEach } from "vitest";
// import { InMemoryOrgRepository } from "./in-memory/in-memory-respository";
// import { CreateOrgUseCase } from "../create-org";
// import { OrgAlreadyExistsError } from "../error/org-already-exists";

// let ongRepository: InMemoryOrgRepository
// let sut: CreateOrgUseCase

// describe('Crate Pet Use Case', () => {

//   beforeEach(() => {
//     ongRepository = new InMemoryOrgRepository()
//     sut = new CreateOrgUseCase(ongRepository)
//   })

//   it('should be able to create a new org', async () => {
//     const { org } = await sut.execute({
//       cnpj: '12345678901234',
//       nome: 'Org Test',
//       email: 'sdfsdfsdfs@asdf.com.br',
//       contato: '11999999999',
//       endereco: 'Rua Teste, 123',
//     })
//     expect(org.id).toEqual(expect.any(String))
//   })


//   it('should not be able to create a new org with same cnpj', async () => {
//     const cnpj = '12345678901234'

//     await sut.execute({
//       cnpj: cnpj,
//       nome: 'Org Test',
//       email: 'sdfsdfsdfs@asdf.com.br',
//       contato: '11999999999',
//       endereco: 'Rua Teste, 123',

//     })

//     await expect(() =>
//       sut.execute({
//         cnpj: cnpj,
//         nome: 'Org Test 2',
//         email: 'sdfsdfsdfs@asdf.com.br',
//         contato: '11999999999',
//         endereco: 'Rua Teste, 123',
//       })).rejects.toBeInstanceOf(OrgAlreadyExistsError)
//   })
// })

// import { describe, it, expect, beforeEach } from "vitest"
// import { InMemoryOrgRepository } from "./in-memory/in-memory-respository"
// import { CreateOrgUseCase } from "../create-org"
// import { OrgAlreadyExistsError } from "../error/org-already-exists"

// let orgRepository: InMemoryOrgRepository
// let sut: CreateOrgUseCase

// describe('Create Org Use Case', () => {

//   beforeEach(() => {
//     orgRepository = new InMemoryOrgRepository()
//     sut = new CreateOrgUseCase(orgRepository)
//   })

//   it('deve criar uma nova organização com sucesso', async () => {
//     // Arrange
//     const orgData = {
//       cnpj: '12345678901234',
//       nome: 'Org Test',
//       email: 'org@test.com',
//       contato: '11999999999',
//       endereco: 'Rua Teste, 123',
//     }

//     // Act
//     const { org } = await sut.execute(orgData)

//     // Assert
//     expect(org).toBeDefined()
//     expect(org.id).toEqual(expect.any(String))
//     expect(org.nome).toBe(orgData.nome)
//   })

//   it('não deve permitir criar uma organização com CNPJ duplicado', async () => {
//     // Arrange
//     const duplicatedCNPJ = '12345678901234'
//     const orgInput = {
//       cnpj: duplicatedCNPJ,
//       nome: 'Org Original',
//       email: 'original@org.com.br',
//       contato: '11999999999',
//       endereco: 'Rua Teste, 123',
//     }

//     await sut.execute(orgInput)

//     // Act + Assert
//     await expect(() =>
//       sut.execute({
//         ...orgInput,
//         nome: 'Org Duplicada',
//       })
//     ).rejects.toBeInstanceOf(OrgAlreadyExistsError)
//   })
// })


import { describe, expect, it, beforeEach } from "vitest";
import { InMemoryOrgRepository } from "./in-memory/in-memory-respository";
import { CreateOrgUseCase } from "../create-org";
import { OrgAlreadyExistsError } from "../error/org-already-exists";

let orgRepository: InMemoryOrgRepository; // Renomeado para consistência
let sut: CreateOrgUseCase;

describe('Create Org Use Case', () => { // Renomeado para refletir o contexto da Org

  beforeEach(() => {
    orgRepository = new InMemoryOrgRepository();
    sut = new CreateOrgUseCase(orgRepository);
  });

  it('should be able to create a new org', async () => {
    // Dados de teste definidos uma vez para clareza
    const orgData = {
      cnpj: '12345678901234',
      nome: 'Org Test',
      email: 'contact@orgtest.com.br', // Email mais representativo
      contato: '11999999999',
      endereco: 'Rua Teste, 123',
    };

    const { org } = await sut.execute(orgData);

    // Asserts mais descritivos
    expect(org).toBeDefined(); // Verifica se o objeto org foi criado
    expect(org.id).toEqual(expect.any(String)); // Confirma que um ID foi gerado
    expect(org.cnpj).toEqual(orgData.cnpj); // Verifica se os dados foram persistidos corretamente
    expect(org.nome).toEqual(orgData.nome);
  });


  it('should not be able to create an org with an existing CNPJ', async () => {
    const commonCnpj = '12345678901234';

    // Cria a primeira organização
    await sut.execute({
      cnpj: commonCnpj,
      nome: 'First Org',
      email: 'first@org.com.br',
      contato: '11999999999',
      endereco: 'Rua Um, 123',
    });

    // Tenta criar uma segunda organização com o mesmo CNPJ e espera o erro
    await expect(() =>
      sut.execute({
        cnpj: commonCnpj,
        nome: 'Second Org',
        email: 'second@org.com.br', // Email diferente para refletir uma "nova" organização
        contato: '11988888888',
        endereco: 'Rua Dois, 456',
      })
    ).rejects.toBeInstanceOf(OrgAlreadyExistsError);
  });
});