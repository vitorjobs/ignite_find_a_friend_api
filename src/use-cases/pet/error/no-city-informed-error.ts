export class NoCityInformedError extends Error {
  constructor() {
    super('Nenhuma cidade informada');
    Object.setPrototypeOf(this, NoCityInformedError.prototype);
    this.message = "Nenhuma cidade informada";
  }
}