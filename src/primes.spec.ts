import { primes } from './primes';
import { collect, takeWhile } from '@jsq/seq';

describe('primes', () => {
    it('should return an infinite sequence of prime numbers', async () => {
        expect(await collect(takeWhile(x => x < 10, primes())))
            .toEqual([2, 3, 5, 7]);
    });
});
