import {ValidPageSpec} from "../Specification/ValidPageSpec";
import {Specification} from "../../Specifications/Specification";
import {InvalidPage} from "../Exception/InvalidPage";

export class Page {
    #value: number;
    #validSearchCharacterPageSpec: Specification = new ValidPageSpec();

    constructor(page: number) {
        this.validate(page);
        this.#value = page;
    }

    private validate(page: number): number {
        if (!this.#validSearchCharacterPageSpec.isSatisfyBy(page)) {
            throw new InvalidPage();
        }

        return page;
    }

    get value(): number {
        return this.#value;
    }

}