import {Character} from "../Character";

export class GetAllFavoriteCharactersResponse {
  #characters: Array<Character>

  constructor(characters: Array<Character>) {
    this.#characters = characters;
  }

  get characters(): Array<Character> {
    return this.#characters;
  }
}