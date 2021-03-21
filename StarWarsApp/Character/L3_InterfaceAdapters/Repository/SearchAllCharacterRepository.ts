import {SearchAllCharactersResponseDTO} from "../Controllers/SearchAllCharactersResponseDTO";

export interface SearchAllCharacterRepository {
  searchAllCharacter(page: number): Promise<SearchAllCharactersResponseDTO>;
}
