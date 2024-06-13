import { isEqual, sortBy } from "lodash";

export default function areArraysEqual<T>(
  arr1: T[],
  arr2: T[],
  sortProperty: keyof T
) {
  return isEqual(sortBy(arr1, sortProperty), sortBy(arr2, sortProperty));
}
