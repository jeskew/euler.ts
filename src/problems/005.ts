import divisibleByAllUpTo from '../divisibleByAllUpTo';
import Problem from "../Problem";
import reduce from "../reduce";
import sieveOfEratosthenes from "../sieveOfEratosthenes";

export const Problem5: Problem = {
    number: 5,
    description: `2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?`,
    solve(): Promise<number> {
        return new Promise((resolve) => {
            const productOfPrimesUnder20 = reduce(
                sieveOfEratosthenes(20),
                (product: number, nextPrime: number) => product * nextPrime,
                1
            );
            let potentialAnswer = productOfPrimesUnder20;

            while (!divisibleByAllUpTo(potentialAnswer, 20)) {
                potentialAnswer += productOfPrimesUnder20;
            }
            resolve(potentialAnswer);
        });
    },
};