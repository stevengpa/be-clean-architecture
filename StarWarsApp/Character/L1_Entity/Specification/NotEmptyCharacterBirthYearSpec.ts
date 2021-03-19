import { CompositeSpecification } from "../../../Shared/L1_Entity/Specifications/CompositeSpecification";

export class NotEmptyCharacterBirthYearSpec implements CompositeSpecification {
  public isSatisfyBy(birthYear: string): boolean {
    return !!birthYear && birthYear.length > 0;
  }
}
