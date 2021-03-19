import {CharacterRepository} from "../L1_Entity/Repository/CharacterRepository";
import {Character} from "../L1_Entity/Character";
import {ApiRepository} from "../../Shared/L4_Framework/API/ApiRepository";
import {AxiosRepository} from "../../Shared/L4_Framework/API/AxiosRepository";
import {CharacterFactory} from "../L1_Entity/Repository/CharacterFactory";
import {CharacterFactoryImpl} from "./CharacterFactoryImpl";
import {ExtractCharacterId} from "../L1_Entity/Utils/ExtractCharacterId";

export class CharacterRepositoryImpl implements CharacterRepository {
    #baseUrl: string = 'https://swapi.dev/api'

    #apiRepository: ApiRepository = new AxiosRepository();
    #characterFactory: CharacterFactory = new CharacterFactoryImpl();

    private extractCharacterId(value: string): number {
        return new ExtractCharacterId(value).extractCharacterId();
    }

    public searchAll(): Promise<Array<Character>> {
        return this.#apiRepository
            .get(`${this.#baseUrl}/people/`)
            .then(response => response?.data?.results)
            .then(characters =>
                characters.map(({url, name, birth_year}: { url: string, name: string, birth_year: string}) =>
                this.#characterFactory.create(
                    this.extractCharacterId(url),
                    name,
                    birth_year
                )
            ))
    }
}