export default function isInArrayByKey<T>(
  items: T[],
  compareItem: T,
  key: keyof T
) {
  return items.some((item) => item[key] === compareItem[key]);
}
