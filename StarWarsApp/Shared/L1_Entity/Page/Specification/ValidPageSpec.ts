import { CompositeSpecification } from "../../Specifications/CompositeSpecification";

export class ValidPageSpec implements CompositeSpecification {
  public isSatisfyBy(page: any): boolean {
    return Number.isInteger(page) && page > 0;
  }
}
