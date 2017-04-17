import primes from "../src/primes";
import takeUntil from "../src/takeUntil";
describe('primes', () => {
    it('should return an infinite sequence of prime numbers', () => {
        expect([...takeUntil(primes(), x => x > 10)]).toEqual([2, 3, 5, 7]);
    });
});