export class ListPetsByCityEmptyError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, ListPetsByCityEmptyError.prototype);
    this.message = "Nenhum pet encontrado na cidade informada";
  }
}