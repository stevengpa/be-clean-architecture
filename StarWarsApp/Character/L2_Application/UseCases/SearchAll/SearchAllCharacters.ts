// L1
import {Page} from "../../../../Shared/L1_Entity/Page/ValueObject/Page";
import {SearchAllCharacterResponse} from "../../../L1_Entity/Repository/SearchAllCharacterResponse";
import {CharacterRepository} from "../../../L1_Entity/Repository/CharacterRepository";

export class SearchAllCharacters {
  #characterRepository: CharacterRepository;

  constructor(characterRepository: CharacterRepository) {
    this.#characterRepository = characterRepository;
  }

  public async searchAll(page: Page): Promise<SearchAllCharacterResponse> {
    return await this.#characterRepository.searchAll(page)
  }
}
