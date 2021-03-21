import { CompositeSpecification } from "../../Specifications/CompositeSpecification";

export class ValidCountSpec implements CompositeSpecification {
  public isSatisfyBy(count: any): boolean {
    return Number.isInteger(count) && count > 0;
  }
}
