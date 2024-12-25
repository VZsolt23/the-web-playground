import { MemoryGameCard } from '../../common/types.ts'
import { getRandomElements } from '../../utils/randomElements.ts'

/**
 * Generates a shuffled set of memory game cards.
 *
 * This function generates a set of memory game cards based on a predefined list of fruit emojis.
 * It randomly selects a number of unique values, then creates two cards for each value (a pair),
 * and returns the shuffled array of cards. The number of cards is determined by the `size` parameter,
 * which should be an even number.
 *
 * @param {number} size - The total number of cards to generate. It must be an even number, as each
 *                        value will be paired. The function selects `size / 2` unique values, and
 *                        creates two cards for each.
 * @returns {MemoryGameCard[]} - A shuffled array of memory game cards, each with a unique `id`,
 *                               `matchId`, `value`, `flipped`, and `matched` properties.
 *
 * @example
 * const cards = generateCards(12);
 * console.log(cards);
 * // Example output:
 * // [
 * //   { id: 0.12345, matchId: 1, value: '🍎', flipped: false, matched: false },
 * //   { id: 0.67890, matchId: 1, value: '🍎', flipped: false, matched: false },
 * //   { id: 0.54321, matchId: 2, value: '🍌', flipped: false, matched: false },
 * //   { id: 0.98765, matchId: 2, value: '🍌', flipped: false, matched: false },
 * //   ...
 * // ]
 *
 * @throws {Error} - Throws an error if the `size` is not an even number.
 */
export const generateCards = (size: number): MemoryGameCard[] => {
  const data = [
    { matchId: 1, value: '🍎' },
    { matchId: 2, value: '🍌' },
    { matchId: 3, value: '🍓' },
    { matchId: 4, value: '🍇' },
    { matchId: 5, value: '🍒' },
    { matchId: 6, value: '🍍' },
    { matchId: 7, value: '🍐' },
    { matchId: 8, value: '🍊' },
    { matchId: 9, value: '🍋' },
    { matchId: 10, value: '🍑' },
    { matchId: 11, value: '🥝' },
    { matchId: 12, value: '🍉' },
  ]

  const currentValues = getRandomElements(data, size / 2)

  const cards = currentValues.flatMap((item: { matchId: number; value: string }) => [
    { id: Math.random(), matchId: item.matchId, value: item.value, flipped: false, matched: false },
    { id: Math.random(), matchId: item.matchId, value: item.value, flipped: false, matched: false },
  ])

  return cards.sort(() => Math.random() - 0.5)
}
