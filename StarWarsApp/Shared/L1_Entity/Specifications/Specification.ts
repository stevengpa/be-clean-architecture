export interface Specification {
  isSatisfyBy: (candidate: any) => boolean;
}
