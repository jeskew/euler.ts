import filter from "./filter";

export default function sieveOfEratosthenes(cap: number): IterableIterator<number> {
    const sieve: Array<boolean> = new Array(cap).fill(true);
    sieve[0] = sieve[1] = false;
    for (let key of sieve.keys()) {
        if (!sieve[key]) continue;
        for (let i = key * 2; i < cap; i += key) {
            sieve[i] = false;
        }
    }

    return filter(sieve.keys(), key => sieve[key])
}