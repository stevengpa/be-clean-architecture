import {CharacterRepository} from "../../../L1_Entity/Repository/CharacterRepository";
import {GetAllFavoriteCharactersResponse} from "../../../L1_Entity/Repository/GetAllFavoriteCharactersResponse";

export class GetAllFavoriteCharacters {
  #characterRepository: CharacterRepository

  constructor(characterRepository: CharacterRepository) {
    this.#characterRepository = characterRepository;
  }

  async getAllFavorites(): Promise<GetAllFavoriteCharactersResponse> {
    return await this.#characterRepository.getAllFavorite();
  }
}