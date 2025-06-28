export class PetGeneralError extends Error {
  constructor() {
    super('Erro Geral ao cadastrar o Pet');
    Object.setPrototypeOf(this, PetGeneralError.prototype);
    this.message = "Erro Geral ao cadastrar o Pet";

  }
}
