import { CompositeSpecification } from "../../../Shared/L1_Entity/Specifications/CompositeSpecification";

export class ValidCharacterIdSpec implements CompositeSpecification {
  public isSatisfyBy(id: any): boolean {
    return Number.isInteger(id);
  }
}
