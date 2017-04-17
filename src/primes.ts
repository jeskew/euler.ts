import sieveOfEratosthenes from "./sieveOfEratosthenes";

export default function* primes() {
    let ceiling = 100;
    let lastEmitted = 0;
    while (Number.isSafeInteger(ceiling)) {
        for (let prime of sieveOfEratosthenes(ceiling)) {
            if (prime > lastEmitted) {
                yield prime;
                lastEmitted = prime;
            }
        }
        ceiling *= 10;
    }
}