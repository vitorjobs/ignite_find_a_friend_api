export class EmailAlreadyExistsError extends Error {
  constructor() {
    super('Email Já Cadastrado');
    Object.setPrototypeOf(this, EmailAlreadyExistsError.prototype);
    this.name = "EmaillreadyExistsError";
    this.message = "Email Já Cadastrado";

  }
}
