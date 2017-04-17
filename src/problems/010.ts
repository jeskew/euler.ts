import Problem from "../Problem";
import sieveOfEratosthenes from "../sieveOfEratosthenes";
import sum from "../sum";

export const Problem10: Problem = {
    number: 10,
    description: `The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.`,
    solve(): Promise<number> {
        return new Promise(resolve => {
            resolve(sum(sieveOfEratosthenes(2000000)));
        });
    }
};