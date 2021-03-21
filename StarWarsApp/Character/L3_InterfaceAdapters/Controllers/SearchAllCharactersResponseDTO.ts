export class SearchAllCharactersResponseDTO {
    #count: number = 0;
    #characters: Array<object> = [];

    constructor(count: number, characters: Array<object>) {
        this.#count = count;
        this.#characters = characters;
    }

    get count(): number {
        return this.#count;
    }

    set count(value: number) {
        this.#count = value;
    }

    get characters(): Array<object> {
        return this.#characters;
    }

    set characters(value: Array<object>) {
        this.#characters = value;
    }
}