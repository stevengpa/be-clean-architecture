export class InvalidBirthYear extends Error {
  constructor() {
    super("Invalid Character Birth Year");
    this.name = "[InvalidCharacterBirthYear]";
  }
}