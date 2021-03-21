export class InvalidPage extends Error {
  constructor() {
    super("Invalid page");
    this.name = "[InvalidPage]";
  }
}