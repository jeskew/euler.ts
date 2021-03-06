import { primes } from '../primes';
import { skip } from '@jsq/seq';

/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
 * that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */
export const p007 = () => skip(10000, primes()).next().value
