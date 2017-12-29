import {divisibleByAllUpTo} from '../divisibleByAllUpTo';
import {sieveOfEratosthenes} from "../sieveOfEratosthenes";
import {reduce} from '@jsq/async-seq';

/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1
 * to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the
 * numbers from 1 to 20?
 */
export const solve = async () => {
    const productOfPrimesUnder20 = await reduce(
        (product: number, nextPrime: number) => product * nextPrime,
        sieveOfEratosthenes(20)
    )
    let potentialAnswer = productOfPrimesUnder20

    while (!divisibleByAllUpTo(potentialAnswer, 20)) {
        potentialAnswer += productOfPrimesUnder20
    }

    return potentialAnswer
}
