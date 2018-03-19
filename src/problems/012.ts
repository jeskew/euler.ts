import { divisors } from '../divisors';
import { triangleNumbers } from '../triangleNumbers';

/**
 * @see https://projecteuler.net/problem=12
 */
export const p012 = () => {
    let num = 0
    for (num of triangleNumbers()) {
        if (divisors(num).size > 500) {
            break
        }
    }

    return num
}
