import {CharacterFactory} from "../L1_Entity/Factory/CharacterFactory";
import {Character} from "../L1_Entity/Character";
import {CharacterId} from "../L1_Entity/ValueObject/CharacterId";
import {CharacterName} from "../L1_Entity/ValueObject/CharacterName";
import {CharacterBirthYear} from "../L1_Entity/ValueObject/CharacterBirthYear";

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
}