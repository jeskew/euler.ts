import sieveOfEratosthenes from "../src/sieveOfEratosthenes";

describe('sieveOfEratosthenes', () => {
    it('should return all primes below a provided ceiling', () => {
        expect([...sieveOfEratosthenes(10)]).toEqual([2, 3, 5, 7]);
    });
});