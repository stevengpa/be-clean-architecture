import { Specification } from "./Specification";

export abstract class CompositeSpecification implements Specification {
  public abstract isSatisfyBy(candidate: any): boolean;
}
