import { CompositeSpecification } from "../../../Shared/L1_Entity/Specifications/CompositeSpecification";

export class NotEmptyCharacterNameSpec implements CompositeSpecification {
  public isSatisfyBy(name: string): boolean {
    return !!name && name.length > 0;
  }
}
