export class InvalidCount extends Error {
  constructor() {
    super("Invalid count");
    this.name = "[InvalidCount]";
  }
}