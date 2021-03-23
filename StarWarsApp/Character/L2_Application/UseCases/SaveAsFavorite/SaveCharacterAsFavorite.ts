import {CharacterRepository} from "../../../L1_Entity/Repository/CharacterRepository";
import {Character} from "../../../L1_Entity/Character";

export class SaveCharacterAsFavorite {
  #characterRepository: CharacterRepository;

  constructor(characterRepository: CharacterRepository) {
    this.#characterRepository = characterRepository;
  }

  public async saveAsFavorite(character: Character) {
    this.#characterRepository.saveAsFavorite(character);
  }
}