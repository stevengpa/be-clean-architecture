export class GetAllFavoriteCharactersDTO {
  #characters: Array<object> = [];

  constructor(characters: Array<object>) {
    this.#characters = characters;
  }

  get characters() {
    return this.#characters;
  }

}