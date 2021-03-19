import { Specification } from "../../../Shared/L1_Entity/Specifications/Specification";
import { ValidCharacterIdSpec } from "../Specification/ValidCharacterIdSpec";
import { InvalidCharacterId } from "../Exception/InvalidCharacterId";

export class CharacterId {
  readonly #value: number;
  #validCharacterId: Specification = new ValidCharacterIdSpec();

  constructor(id: number) {
    this.validate(id);
    this.#value = id;
  }

  get value(): number {
    return this.#value;
  }

  private validate(id: number): boolean {
    if (!this.#validCharacterId.isSatisfyBy(id)) {
      throw new InvalidCharacterId();
    }

    return true;
  }
}
