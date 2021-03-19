import { NotEmptyCharacterNameSpec } from "../Specification/NotEmptyCharacterNameSpec";
import { Specification } from "../../../Shared/L1_Entity/Specifications/Specification";
import { InvalidCharacterName } from "../Exception/InvalidCharacterName";

export class CharacterName {
  readonly #value: string;
  #notEmptyCharacterNameSpec: Specification = new NotEmptyCharacterNameSpec();

  constructor(name: string) {
    this.validate(name);
    this.#value = name;
  }

  get value(): string {
    return this.#value;
  }

  private validate(name: string): boolean {
    if (!this.#notEmptyCharacterNameSpec.isSatisfyBy(name)) {
      throw new InvalidCharacterName();
    }

    return true;
  }
}
