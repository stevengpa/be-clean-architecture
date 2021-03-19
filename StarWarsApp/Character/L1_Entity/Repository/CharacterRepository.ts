import { Character } from "../Character";

export interface CharacterRepository {
  searchAll(): Promise<Array<Character>>;
}
