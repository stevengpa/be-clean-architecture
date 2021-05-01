export class SearchAllCharacterResponseDTO {
    #count: number = 0;
    #characters: Array<object> = [];

    constructor(count: number, characters: Array<object>) {
        this.#count = count;
        this.#characters = characters;
    }

    get count(): number {
        return this.#count;
    }

    get characters(): Array<object> {
        return this.#characters;
    }
}