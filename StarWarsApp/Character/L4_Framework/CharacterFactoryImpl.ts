import {CharacterFactory} from "../L1_Entity/Factory/CharacterFactory";
import {Character} from "../L1_Entity/Character";
import {CharacterId} from "../L1_Entity/ValueObject/CharacterId";
import {CharacterName} from "../L1_Entity/ValueObject/CharacterName";
import {CharacterBirthYear} from "../L1_Entity/ValueObject/CharacterBirthYear";
import {ExtractCharacterId} from "../L1_Entity/Utils/ExtractCharacterId";

export class CharacterFactoryImpl implements CharacterFactory {
    create(id: number, name: string, birthYear: string): Character {
        return new Character(
            new CharacterId(id),
            new CharacterName(name),
            new CharacterBirthYear(birthYear)
        );
    }

    toPrimitive(character: Character): object {
        return {
            id: character.id.value,
            name: character.name.value,
            birthYear: character.birthYear.value
        }
    }

    fromPrimitiveSourceToCharacter(url: string, name: string, birthYear: string): Character {
        return this.create(
          new ExtractCharacterId(url).extractCharacterId(),
          name,
          birthYear
        )
    }

    fromPrimitiveSourceToCharacters(results: Array<any>): Array<Character> {
        return results.map(
          ({url, name, birth_year}: { url: string, name: string, birth_year: string}) =>
            this.fromPrimitiveSourceToCharacter(url, name, birth_year)
        )
    }

    fromPrimitiveToCharacter(id: number, name: string, birthYear: string): Character {
        return this.create(
          id,
          name,
          birthYear
        )
    }

    fromPrimitiveToCharacters(results: Array<any>): Array<Character> {
        return results.map(
          ({id, name, birthYear}: { id: number, name: string, birthYear: string}) =>
            this.fromPrimitiveToCharacter(id, name, birthYear)
        )
    }
}