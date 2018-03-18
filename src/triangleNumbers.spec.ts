import { triangleNumbers } from './triangleNumbers';
import { collect, take } from '@jsq/seq';

describe('triangleNumbers', () => {
    it('should return an infinite sequence of triangle numbers', async () => {
        expect(await collect(take(10, triangleNumbers())))
            .toEqual([1, 3, 6, 10, 15, 21, 28, 36, 45, 55]);
    });
});
