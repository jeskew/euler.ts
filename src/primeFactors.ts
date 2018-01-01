import {sieveOfEratosthenes} from "./sieveOfEratosthenes";

export function primeFactors(toFactor: number): Array<number> {
    const factors: Array<number> = [];
    const primesUnderSqrt = new Set<number>(
        sieveOfEratosthenes(Math.ceil(Math.sqrt(toFactor)) + 2)
    );

    outer:
    while (true) {
        for (const prime of primesUnderSqrt) {
            if (toFactor % prime === 0) {
                toFactor /= prime;
                factors.push(prime);
                continue outer;
            }
        }

        if (toFactor !== 1) {
            factors.push(toFactor);
        }
        break;
    }

    return factors;
}
