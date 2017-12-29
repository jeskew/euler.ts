import {fibonacci} from "./fibonacci";
import {collect, takeWhile} from '@jsq/async-seq';

describe('fibonacci', () => {
    it('should return an infinite sequence of fibonacci numbers', async () => {
        expect(await collect(takeWhile(x => x < 10, fibonacci())))
            .toEqual([1, 1, 2, 3, 5, 8]);
    });
});
