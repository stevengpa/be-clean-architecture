import {SearchAllCharacterResponse} from "./SearchAllCharacterResponse";
import {Page} from "../../../Shared/L1_Entity/Page/ValueObject/Page";
import {Character} from "../Character";
import {GetAllFavoriteCharactersResponse} from "./GetAllFavoriteCharactersResponse";

export interface CharacterRepository {
    searchAll(page: Page): Promise<SearchAllCharacterResponse>;
    saveAsFavorite(character: Character): void
    getAllFavorite(): Promise<GetAllFavoriteCharactersResponse>
}
