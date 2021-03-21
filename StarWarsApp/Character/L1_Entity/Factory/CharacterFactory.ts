import {Character} from "../Character";

export interface CharacterFactory {
    create(id: number, name: string, birthYear: string): Character
    toPrimitive(character: Character): object
}