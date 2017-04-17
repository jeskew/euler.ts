import takeUntil from "../src/takeUntil";

describe('takeUntil', () => {
    it('should stop iteration when the predicate returns true', () => {
        const input = new Array(10);
        const output: Array<any> = [];
        const expectedLength = 5;
        expect(input.length).toBeGreaterThan(expectedLength);

        for (let element of takeUntil(input, () => output.length === expectedLength)) {
            output.push(element);
        }

        expect(output.length).toBe(expectedLength);
    });

    it('should stop iteration when the source iterator is exhausted', () => {
        const input = new Array(5);
        const output: Array<any> = [];
        const expectedLength = 10;

        for (let element of takeUntil(input, () => output.length === expectedLength)) {
            output.push(element);
        }

        expect(output.length).toBe(input.length);
    });
});