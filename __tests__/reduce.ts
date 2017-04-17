import reduce from "../src/reduce";

describe('reduce', () => {
    it('should apply the reducer function to each item', () => {
        const reducer = jest.fn().mockReturnValue(1);
        reduce(new Array(5), reducer, 0);
        expect(reducer.mock.calls.length).toBe(5);
    });

    it('should return the result of the final reducer function', () => {
        const returnVal = new Date();
        const reducer = jest.fn();
        reducer
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(returnVal);
        expect(reduce(new Array(5), reducer, 0)).toBe(returnVal);
    });
});