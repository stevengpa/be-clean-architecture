import {ValidCountSpec} from "../Specification/ValidCountSpec";
import {Specification} from "../../Specifications/Specification";
import {InvalidCount} from "../Exception/InvalidCount";

export class Count {
    #value: number;
    #validSearchCharacterPageSpec: Specification = new ValidCountSpec();

    constructor(count: number) {
        this.validate(count);
        this.#value = count;
    }

    private validate(count: number): number {
        if (!this.#validSearchCharacterPageSpec.isSatisfyBy(count)) {
            throw new InvalidCount();
        }

        return count;
    }

    get value(): number {
        return this.#value;
    }

}