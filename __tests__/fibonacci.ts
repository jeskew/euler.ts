import fibonacci from "../src/fibonacci";
import takeUntil from "../src/takeUntil";
describe('fibonacci', () => {
    it('should return an infinite sequence of fibonacci numbers', () => {
        expect([...takeUntil(fibonacci(), x => x > 10)])
            .toEqual([1, 1, 2, 3, 5, 8]);
    });
});