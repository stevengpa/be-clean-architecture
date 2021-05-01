import {Character} from "../Character";

export interface CharacterFactory {
    create(id: number, name: string, birthYear: string): Character
    toPrimitive(character: Character): object
    fromPrimitiveSourceToCharacters(results: Array<object>): Array<Character>
    fromPrimitiveSourceToCharacter(url: string, name: string, birthYear: string): Character
    fromPrimitiveToCharacters(results: Array<any>): Array<Character>
    fromPrimitiveToCharacter(id: number, name: string, birthYear: string): Character
}