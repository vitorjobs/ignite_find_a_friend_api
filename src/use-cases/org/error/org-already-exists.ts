export class OrgAlreadyExistsError extends Error {
  constructor() {
    super('Ong Já Cadastrada');
    Object.setPrototypeOf(this, OrgAlreadyExistsError.prototype);
    this.name = "UserAlreadyExistsError";
    this.message = "Ong Já Cadastrada";

  }
}
