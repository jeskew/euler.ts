import {sieveOfEratosthenes} from "./sieveOfEratosthenes";

export function primeFactors(toFactor: number): Array<number> {
    const factors: Array<number> = [];
    const primesUnderSqrt = new Set<number>(
        sieveOfEratosthenes(Math.ceil(Math.sqrt(toFactor)) + 2)
    );

    while (!primesUnderSqrt.has(toFactor)) {
        for (const prime of primesUnderSqrt) {
            if (toFactor % prime === 0) {
                toFactor /= prime;
                factors.push(prime);
                break;
            }
        }
    }
    factors.push(toFactor);

    return factors;
}
