import {Character} from "../Character";
import {Count} from "../../../Shared/L1_Entity/Count/ValueObject/Count";

export class SearchAllCharacterResponse {
    #count: Count;
    #characters: Array<Character>

    constructor(count: Count, characters: Array<Character>) {
        this.#count = count;
        this.#characters = characters;
    }

    get count(): Count {
        return this.#count;
    }

    get characters(): Array<Character> {
        return this.#characters;
    }
}