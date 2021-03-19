export class InvalidCharacterId extends Error {
    constructor() {
        super("Invalid Character Id");
        this.name = "[InvalidCharacterId]";
    }
}
