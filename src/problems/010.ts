import { sieveOfEratosthenes } from '../sieveOfEratosthenes';
import { sum } from '@jsq/seq';

/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */
export const solve = () => sum(sieveOfEratosthenes(2000000))
