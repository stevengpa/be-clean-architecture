import { CompositeSpecification } from "../../../../Shared/Entities/Specifications/CompositeSpecification";

export class NotEmptyCharacterNameSpec implements CompositeSpecification {
  isSatisfyBy(value: string): boolean {
    return !!value && value.length > 0;
  }
}
