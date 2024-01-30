export function minBy<T>(array: T[], cb: (input: T) => unknown): T | undefined {
  if (array[0]) {
    let minElement;
    let minValue = cb(array[0]);
    for (let element of array) {
      const value = cb(element);
      if (value && minValue && value < minValue) {
        minValue = value;
        minElement = element;
      }
    }
    return minElement;
  }
}

export function maxBy<T>(array: T[], cb: (input: T) => unknown): T | undefined {
  if (array[0]) {
    let maxElement;
    let maxValue = cb(array[0]);
    for (let element of array) {
      const value = cb(element);
      if (value && maxValue && value > maxValue) {
        maxValue = value;
        maxElement = element;
      }
    }
    return maxElement;
  }
}
