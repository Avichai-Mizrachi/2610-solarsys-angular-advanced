export function sum<T>(items: T[], picker: (item: T) => number): number {
  const numbers = items.map(picker);
  return numbers.reduce((acc, next) => acc + next, 0);
}
