import Problem from "../Problem";
import primeFactors from "../primeFactors";

export const Problem3: Problem = {
    number: 3,
    description: `The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?`,
    solve(): Promise<number> {
        return Promise.resolve(
            primeFactors(600851475143)
                .sort((a: number, b: number): number => a - b)
                .pop()
        );
    }
};