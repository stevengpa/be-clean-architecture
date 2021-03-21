// L1
import {Character} from "../../L1_Entity/Character";
import {Page} from "../../../Shared/L1_Entity/Page/ValueObject/Page";
import {CharacterRepository} from "../../L1_Entity/Repository/CharacterRepository";
import {SearchAllCharacterResponse} from "../../L1_Entity/Repository/SearchAllCharacterResponse";
import {CharacterFactory} from "../../L1_Entity/Factory/CharacterFactory";

// L2
import {SearchAllCharacters} from "../../L2_Application/UseCases/SearchAll/SearchAllCharacters";
import {SearchAllCharacterRepository} from "../Repository/SearchAllCharacterRepository";

import {SearchAllCharactersResponseDTO} from "./SearchAllCharactersResponseDTO";

export class SearchAllCharacterController implements SearchAllCharacterRepository {
    #searchAllCharacters: SearchAllCharacters;
    #characterFactory: CharacterFactory

    constructor(characterRepository: CharacterRepository, characterFactory: CharacterFactory) {
        this.#searchAllCharacters = new SearchAllCharacters(characterRepository);
        this.#characterFactory = characterFactory;
    }

    public async searchAllCharacter(page: number): Promise<SearchAllCharactersResponseDTO> {
        const selectedPage: Page = new Page(page);

        const searchAllCharactersResponse: SearchAllCharacterResponse =
            await this.#searchAllCharacters.searchAll(selectedPage);

        const { count, characters } = searchAllCharactersResponse;

        const primitiveCharacters =
            characters.map((character: Character) => this.#characterFactory.toPrimitive(character));

        return new SearchAllCharactersResponseDTO(count.value, primitiveCharacters);
    }
}