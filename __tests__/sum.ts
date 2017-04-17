import sum from "../src/sum";

describe('sum', () => {
    it('should return the sum of all numbers returned by an iterable', () => {
        expect(sum([1, 1, -2, 5])).toBe(5);
    });
});