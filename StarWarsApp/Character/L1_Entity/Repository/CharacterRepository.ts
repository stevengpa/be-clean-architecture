import {SearchAllCharacterResponse} from "./SearchAllCharacterResponse";
import {Page} from "../../../Shared/L1_Entity/Page/ValueObject/Page";
import {Character} from "../Character";

export interface CharacterRepository {
    searchAll(page: Page): Promise<SearchAllCharacterResponse>;
    saveAsFavorite(character: Character)
}
