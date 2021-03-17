import { NotEmptyCharacterNameSpec } from "../Specifications/NotEmptyCharacterNameSpec";
import { Specification } from "../../../../Shared/Entities/Specifications/Specification";
import { InvalidCharacterName } from "../Exceptions/InvalidCharacterName";

export class CharacterName {
  private _characterName: string;
  private notEmptyCharacterNameSpec: Specification = new NotEmptyCharacterNameSpec();

  constructor(characterName: string) {
    this.validate(characterName);
    this._characterName = characterName;
  }

  private validate(characterName: string): boolean {
    if (!this.notEmptyCharacterNameSpec.isSatisfyBy(characterName)) {
      throw new InvalidCharacterName();
    }

    return true;
  }
}
