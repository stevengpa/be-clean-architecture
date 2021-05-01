// L1
import {Character} from "../L1_Entity/Character";
import {CharacterFactory} from "../L1_Entity/Factory/CharacterFactory";
import {ExtractCharacterId} from "../L1_Entity/Utils/ExtractCharacterId";
import {SearchAllCharacterResponse} from "../L1_Entity/Repository/SearchAllCharacterResponse";
import {CharacterRepository} from "../L1_Entity/Repository/CharacterRepository";

import {Count} from "../../Shared/L1_Entity/Count/ValueObject/Count";
import {Page} from "../../Shared/L1_Entity/Page/ValueObject/Page";
// L3
import {ApiRepository} from "../../Shared/L3_InterfaceAdapters/Adapters/API/ApiRepository";
// L4
import {AxiosRepository} from "../../Shared/L4_Framework/API/AxiosRepository";

import {CharacterFactoryImpl} from "./CharacterFactoryImpl";
import {CharacterGateway} from "../L3_InterfaceAdapters/Gateways/CharacterGateway";
import {CharacterStorageImpl} from "./CharacterStorageImpl";
import {GetAllFavoriteCharactersResponse} from "../L1_Entity/Repository/GetAllFavoriteCharactersResponse";


export class CharacterRepositoryImpl implements CharacterRepository {
    #baseUrl: string = 'https://swapi.dev/api'

    #apiRepository: ApiRepository = new AxiosRepository();
    #characterFactory: CharacterFactory = new CharacterFactoryImpl();
    #characterStorage: CharacterGateway = new CharacterStorageImpl();

    public async searchAll(page: Page): Promise<SearchAllCharacterResponse> {
        return this.#apiRepository
            .get(`${this.#baseUrl}/people/?page=${page.value}`)
            .then(response => response?.data)
            .then(({ count, results }: { count: number, results: Array<any> }) => {
                const characters: Array<Character> = this.#characterFactory.fromPrimitiveSourceToCharacters(results);
                return this.createSearchAllCharacterResponse(count, characters);
            })
    }


    private createSearchAllCharacterResponse(count: number, characters: Array<Character>): SearchAllCharacterResponse {
        return new SearchAllCharacterResponse(
            new Count(count),
            characters
        )
    }

    public async saveAsFavorite(character: Character) {
        this.#characterStorage.saveAsFavorite(
          character.id.value,
          character.name.value,
          character.birthYear.value
        )
    }

    public async getAllFavorite(): Promise<GetAllFavoriteCharactersResponse> {
        const primitiveFavoriteCharacters = this.#characterStorage.getAllFavorite();
        const characters: Array<Character> = this.#characterFactory.fromPrimitiveToCharacters(primitiveFavoriteCharacters)

        return new GetAllFavoriteCharactersResponse(characters)
    }
}