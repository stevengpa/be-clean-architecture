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


export class CharacterRepositoryImpl implements CharacterRepository {
    #baseUrl: string = 'https://swapi.dev/api'

    #apiRepository: ApiRepository = new AxiosRepository();
    #characterFactory: CharacterFactory = new CharacterFactoryImpl();
    #characterStorage: CharacterGateway = new CharacterStorageImpl();

    public searchAll(page: Page): Promise<SearchAllCharacterResponse> {
        return this.#apiRepository
            .get(`${this.#baseUrl}/people/?page=${page.value}`)
            .then(response => response?.data)
            .then(({ count, results }: { count: number, results: Array<any> }) => {
                const characters: Array<Character> = this.convertResultsToCharacters(results);
                return this.createSearchAllCharacterResponse(count, characters);
            })
    }

    private fromPrimitiveToCharacter(url: string, name: string, birthYear: string): Character {
        return this.#characterFactory.create(
            new ExtractCharacterId(url).extractCharacterId(),
            name,
            birthYear
        )
    }

    private convertResultsToCharacters(results: Array<any>): Array<Character> {
        return results.map(
            ({url, name, birth_year}: { url: string, name: string, birth_year: string}) =>
                this.fromPrimitiveToCharacter(url, name, birth_year)
        )
    }

    private createSearchAllCharacterResponse(count: number, characters: Array<Character>): SearchAllCharacterResponse {
        return new SearchAllCharacterResponse(
            new Count(count),
            characters
        )
    }

    saveAsFavorite(character: Character) {
        this.#characterStorage.saveAsFavorite(
          character.id.value,
          character.name.value,
          character.birthYear.value
        )
    }
}