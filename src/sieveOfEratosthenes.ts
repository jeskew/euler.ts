export function *sieveOfEratosthenes(cap: number) {
    const sieve: Array<boolean> = new Array(cap).fill(true);
    sieve[0] = sieve[1] = false;
    for (let key of sieve.keys()) {
        if (sieve[key]) {
            yield key;
            for (let i = key * 2; i < cap; i += key) {
                sieve[i] = false;
            }
        }
    }
}
