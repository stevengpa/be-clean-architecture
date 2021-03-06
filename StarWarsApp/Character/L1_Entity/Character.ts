import { CharacterId } from "./ValueObject/CharacterId";
import { CharacterName } from "./ValueObject/CharacterName";
import { CharacterBirthYear } from "./ValueObject/CharacterBirthYear";

export class Character {
  readonly #id: CharacterId;
  readonly #name: CharacterName;
  readonly #birthYear: CharacterBirthYear;

  constructor(
    id: CharacterId,
    name: CharacterName,
    birthYear: CharacterBirthYear
  ) {
    this.#id = id;
    this.#name = name;
    this.#birthYear = birthYear;
  }

  get id(): CharacterId {
    return this.#id;
  }

  get name(): CharacterName {
    return this.#name;
  }

  get birthYear(): CharacterBirthYear {
    return this.#birthYear;
  }
}
