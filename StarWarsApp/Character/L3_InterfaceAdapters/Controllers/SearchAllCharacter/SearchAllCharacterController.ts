// L1
import {Character} from "../../../L1_Entity/Character";
import {Page} from "../../../../Shared/L1_Entity/Page/ValueObject/Page";
import {CharacterRepository} from "../../../L1_Entity/Repository/CharacterRepository";
import {SearchAllCharacterResponse} from "../../../L1_Entity/Repository/SearchAllCharacterResponse";
import {CharacterFactory} from "../../../L1_Entity/Factory/CharacterFactory";

// L2
import {SearchAllCharacters} from "../../../L2_Application/UseCases/SearchAll/SearchAllCharacters";

import {SearchAllCharacterResponseDTO} from "./SearchAllCharacterResponseDTO";

export class SearchAllCharacterController {
    #searchAllCharactersUseCase: SearchAllCharacters;
    #characterFactory: CharacterFactory

    constructor(characterRepository: CharacterRepository, characterFactory: CharacterFactory) {
        this.#searchAllCharactersUseCase = new SearchAllCharacters(characterRepository);
        this.#characterFactory = characterFactory;
    }

    public async searchAllCharacter(page: number): Promise<SearchAllCharacterResponseDTO> {
        const selectedPage: Page = new Page(page);

        const searchAllCharactersResponse: SearchAllCharacterResponse =
            await this.#searchAllCharactersUseCase.searchAll(selectedPage);

        const { count, characters } = searchAllCharactersResponse;

        const primitiveCharacters =
            characters.map((character: Character) => this.#characterFactory.toPrimitive(character));

        return new SearchAllCharacterResponseDTO(count.value, primitiveCharacters);
    }
}