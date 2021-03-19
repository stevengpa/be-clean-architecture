import { CharacterRepository } from "../../L1_Entity/Repository/CharacterRepository";
import {Character} from "../../L1_Entity/Character";

export class SearchAllCharacters {
  #characterRepository: CharacterRepository;

  constructor(characterRepository: CharacterRepository) {
    this.#characterRepository = characterRepository;
  }

  public async searchAll(): Promise<Array<Character>> {
    return await this.#characterRepository.searchAll()
  }
}
