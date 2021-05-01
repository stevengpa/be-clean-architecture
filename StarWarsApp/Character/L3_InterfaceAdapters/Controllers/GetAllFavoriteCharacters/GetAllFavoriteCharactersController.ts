import {GetAllFavoriteCharacters} from "../../../L2_Application/UseCases/GetAllFavorite/GetAllFavoriteCharacters";
import {CharacterFactory} from "../../../L1_Entity/Factory/CharacterFactory";
import {CharacterRepository} from "../../../L1_Entity/Repository/CharacterRepository";
import {GetAllFavoriteCharactersResponse} from "../../../L1_Entity/Repository/GetAllFavoriteCharactersResponse";
import {Character} from "../../../L1_Entity/Character";
import {GetAllFavoriteCharactersDTO} from "./GetAllFavoriteCharactersDTO";

export class GetAllFavoriteCharactersController {
  #getAllFavoriteCharactersUseCase: GetAllFavoriteCharacters;
  #characterFactory: CharacterFactory;

  constructor(characterRepository: CharacterRepository, characterFactory: CharacterFactory) {
    this.#getAllFavoriteCharactersUseCase = new GetAllFavoriteCharacters(characterRepository);
    this.#characterFactory = characterFactory;
  }

  async getAllFavoriteCharacters(): Promise<GetAllFavoriteCharactersDTO>  {
    const getAllFavoriteCharactersResponse: GetAllFavoriteCharactersResponse =
      await this.#getAllFavoriteCharactersUseCase.getAllFavorites();
    
    const { characters } = getAllFavoriteCharactersResponse;

    const primitiveCharacters: object[] =
      characters.map((character: Character) => this.#characterFactory.toPrimitive(character))

    return new GetAllFavoriteCharactersDTO(primitiveCharacters);
  }
}