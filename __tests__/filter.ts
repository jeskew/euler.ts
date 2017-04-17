import filter from "../src/filter";
describe('filter', () => {
    it(
        'should yield values from the underlying source only if the filter function returns true',
        () => {
            const input = [1, 2, 3];
            const filterFunc = jest.fn();
            filterFunc
                .mockReturnValueOnce(false)
                .mockReturnValueOnce(true)
                .mockReturnValueOnce(false);

            expect([...filter(input, filterFunc)]).toEqual([2]);
        }
    );

    it('should exclude falsy values by default', () => {
        const input = [0, '', undefined, null, false, true, [], {}];
        expect([...filter(input)]).toEqual([true, [], {}]);
    });
});