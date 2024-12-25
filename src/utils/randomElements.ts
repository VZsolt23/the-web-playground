/**
 * Selects random elements from an array.
 *
 * This function creates a copy of the input array, then applies the Fisher-Yates algorithm
 * to randomly shuffle the elements of the array. It then returns the specified number of
 * random elements.
 *
 * @template T - The type of the elements in the array.
 * @param {T[]} array - The array from which random elements will be selected.
 * @param {number} count - The number of elements to select. If the count is greater than
 *                         the array length, an error is thrown.
 * @returns {T[]} - A new array containing the randomly selected elements.
 * @throws {Error} - Throws an error if `count` is greater than the length of the `array`.
 *
 * @example
 * const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
 * const selectedFruits = getRandomElements(fruits, 3);
 * console.log(selectedFruits);  // e.g., ['banana', 'cherry', 'apple']
 */
export function getRandomElements<T>(array: T[], count: number): T[] {
  if (count > array.length) {
    throw new Error('The number of elements to be selected must not exceed the size of the array.')
  }

  if (array.length === count) {
    return array
  }

  // Making a copy of the block
  const shuffled = [...array]

  // Fisher-Yates mixing
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }

  // Return the first `count` element
  return shuffled.slice(0, count)
}
