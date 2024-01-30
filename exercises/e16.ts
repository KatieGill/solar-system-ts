// see e16.md
// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find(
  array: unknown[],
  callback: (element: unknown) => unknown
): unknown | undefined {
  for (let element of array) {
    if (callback(element)) return element;
  }
  return undefined;
}
