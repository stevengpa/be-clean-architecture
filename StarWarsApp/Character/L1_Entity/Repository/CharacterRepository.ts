import {SearchAllCharacterResponse} from "./SearchAllCharacterResponse";
import {Page} from "../../../Shared/L1_Entity/Page/ValueObject/Page";

export interface CharacterRepository {
    searchAll(page: Page): Promise<SearchAllCharacterResponse>;
}
