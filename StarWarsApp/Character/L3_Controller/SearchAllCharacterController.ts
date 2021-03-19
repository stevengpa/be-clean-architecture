import {SearchAllCharacters} from "../L2_UseCase/SearchAll/SearchAllCharacters";
import {CharacterRepository} from "../L1_Entity/Repository/CharacterRepository";
import {Character} from "../L1_Entity/Character";

export class SearchAllCharacterController {
    #searchAllCharacters: SearchAllCharacters;

    constructor(characterRepository: CharacterRepository) {
        this.#searchAllCharacters = new SearchAllCharacters(characterRepository);
    }

    public async searchAllCharacter(): Promise<Array<object>> {
        const characters: Array<Character> = await this.#searchAllCharacters.searchAll();
        return characters.map((character: Character) => character.toPrimitive());
    }
}