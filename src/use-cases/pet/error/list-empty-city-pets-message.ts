export class ListEmptyCityPetsMessage extends Error {
  constructor() {
    super('Erro ao encontrar cidade/listar Pets');
    Object.setPrototypeOf(this, ListEmptyCityPetsMessage.prototype);
    this.message = "Erro ao encontrar cidade/listar Pets";
  }
}

