import { fibonacci } from './fibonacci';
import { takeWhile } from '@jsq/seq';

describe('fibonacci', () => {
    it('should return an infinite sequence of fibonacci numbers', () => {
        expect([...takeWhile(x => x < 10, fibonacci())])
            .toEqual([1, 1, 2, 3, 5, 8]);
    });
});
