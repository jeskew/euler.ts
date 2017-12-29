import {sieveOfEratosthenes} from "./sieveOfEratosthenes";

export function* primes() {
    let ceiling = 100;
    let lastEmitted = 0;
    while (Number.isSafeInteger(ceiling)) {
        for (const prime of sieveOfEratosthenes(ceiling)) {
            if (prime > lastEmitted) {
                yield prime;
                lastEmitted = prime;
            }
        }
        ceiling *= 10;
    }
}
