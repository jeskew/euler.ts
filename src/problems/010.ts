import { sieveOfEratosthenes } from '../sieveOfEratosthenes';
import { sumSync } from '@jsq/seq';

/**
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */
export const p010 = () => sumSync(sieveOfEratosthenes(2000000))
