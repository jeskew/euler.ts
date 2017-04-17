import range from "../src/range";

describe('range', () => {
    it(
        'should return an iterator that advances from the provided start to the provided end',
        () => {
            expect([...range(1, 10)]).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        }
    );

    it('should support a custom step value', () => {
        expect([...range(3, 10, 3)]).toEqual([3, 6, 9]);
    });

    it('should support a negative step value', () => {
        expect([...range(10, 0, -1)]).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
});