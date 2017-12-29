import {primeFactors} from "./primeFactors";

describe('primeFactors', () => {
    it('should return the prime factors for a non-prime number', () => {
        expect(primeFactors(6)).toEqual([2, 3]);
    });

    it('should include duplicates in the returned factors', () => {
        expect(primeFactors(12)).toEqual([2, 2, 3]);
    });
});
