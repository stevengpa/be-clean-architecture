export class InvalidCharacterName extends Error {
  constructor() {
    super("Invalid Character Name");
    this.name = "[InvalidCharacterName]";
  }
}
