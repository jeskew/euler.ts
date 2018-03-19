import {primeFactors} from "../primeFactors";

/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143?
 */
export const p003 = () => primeFactors(600851475143)
    .sort((a, b) => a - b)
    .pop() as number
