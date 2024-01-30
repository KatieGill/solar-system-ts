export function minBy(
  array: unknown[],
  cb: (input: unknown) => unknown
): unknown | undefined {
  let minValue;
  let minElement;
  for (let element of array) {
    const value = cb(element);
    if (value) {
      if (minValue === null || minValue === undefined || value < minValue) {
        minValue = value;
        minElement = element;
      }
    }
  }
  return minElement;
}

export function maxBy(
  array: unknown[],
  cb: (input: unknown) => unknown
): unknown | undefined {
  let maxValue;
  let maxElement;
  for (let element of array) {
    const value = cb(element);
    if (value) {
      if (maxValue === undefined || value > maxValue) {
        maxValue = value;
        maxElement = element;
      }
    }
  }
  return maxElement;
}
