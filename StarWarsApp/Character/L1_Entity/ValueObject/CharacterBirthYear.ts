import { Specification } from "../../../Shared/L1_Entity/Specifications/Specification";
import { NotEmptyCharacterBirthYearSpec } from "../Specification/NotEmptyCharacterBirthYearSpec";
import { InvalidBirthYear } from "../Exception/InvalidBirthYear";

export class CharacterBirthYear {
  readonly #value: string;
  #notEmptyCharacterBirthYear: Specification = new NotEmptyCharacterBirthYearSpec();

  constructor(birthYear: string) {
    this.validate(birthYear);
    this.#value = birthYear;
  }

  get value(): string {
    return this.#value;
  }

  private validate(birthYear: string): boolean {
    if (!this.#notEmptyCharacterBirthYear.isSatisfyBy(birthYear)) {
      throw new InvalidBirthYear();
    }

    return true;
  }
}
