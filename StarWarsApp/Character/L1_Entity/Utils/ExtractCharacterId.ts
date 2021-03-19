import {InvalidCharacterId} from "../Exception/InvalidCharacterId";

export class ExtractCharacterId {
    #value: string

    constructor(value: string) {
        this.#value = value;
    }

    public extractCharacterId(): number {
        const values: Array<string> = this.#value.split('/');
        const idCandidate: string = values[values.length - 2];
        const id: number = parseInt(idCandidate);

        if (!Number.isInteger(id)) {
            throw new InvalidCharacterId();
        }

        return id;
    }
}