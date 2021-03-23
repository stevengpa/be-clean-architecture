// L1
import {CharacterRepository} from "../../../L1_Entity/Repository/CharacterRepository";
import {CharacterFactory} from "../../../L1_Entity/Factory/CharacterFactory";
// L2
import {SaveCharacterAsFavorite} from "../../../L2_Application/UseCases/SaveAsFavorite/SaveCharacterAsFavorite";

export class SaveCharacterAsFavoriteController {
  #saveCharacterAsFavoriteUseCase: SaveCharacterAsFavorite;
  #characterFactory: CharacterFactory;

  constructor(characterRepository: CharacterRepository, characterFactory: CharacterFactory) {
    this.#saveCharacterAsFavoriteUseCase = new SaveCharacterAsFavorite(characterRepository);
    this.#characterFactory = characterFactory;
  }

  async saveCharacterAsFavorite(id: number, name: string, birthYear: string): Promise<void> {
    const character = this.#characterFactory.create(id, name, birthYear);

    await this.#saveCharacterAsFavoriteUseCase.saveAsFavorite(character);
  }
}