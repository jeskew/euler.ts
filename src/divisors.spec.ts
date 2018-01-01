import { divisors } from './divisors';

describe('divisors', () => {
    it('should return the natural divisors of a given number', async () => {
        for (const [num, knownDivisors] of [
            [1, [1]],
            [3, [1, 3]],
            [6, [1, 2, 3, 6]],
            [10, [1, 2, 5, 10]],
            [15, [1, 3, 5, 15]],
            [21, [1, 3, 7, 21]],
            [28, [1, 2, 4, 7, 14, 28]],
        ] as Array<[number, Array<number>]>) {
            expect([...divisors(num)].sort((a, b) => a - b))
                .toEqual(knownDivisors);
        }
    });
});
