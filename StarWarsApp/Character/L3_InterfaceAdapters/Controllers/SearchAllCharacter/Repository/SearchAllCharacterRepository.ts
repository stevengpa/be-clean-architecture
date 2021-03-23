import {SearchAllCharacterResponseDTO} from "../SearchAllCharacterResponseDTO";

export interface SearchAllCharacterRepository {
  searchAllCharacter(page: number): Promise<SearchAllCharacterResponseDTO>;
}
