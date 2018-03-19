import { range, reduceSync, sumSync } from '@jsq/seq';

/**
 * The sum of the squares of the first ten natural numbers is,
 *
 * ```1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385```
 *
 * The square of the sum of the first ten natural numbers is,
 *
 * ```(1 + 2 + ... + 10)<sup>2</sup> = 552 = 3025```
 *
 * Hence the difference between the sum of the squares of the first ten natural
 * numbers and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred
 * natural numbers and the square of the sum.
 */
export const p006 = () => {
    const ceiling = 101
    const sumOfSquares = reduceSync(
        (carry, num) => carry + (num * num),
        range(ceiling)
    )
    const sumToCeiling = sumSync(range(ceiling))
    return Math.abs(sumOfSquares - sumToCeiling * sumToCeiling)
}
