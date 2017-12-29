import {divisibleByAllUpTo} from './divisibleByAllUpTo';

describe('divisibleByAllUpTo', () => {
    it('should report that 2520 is divisible by all numbers up to 10', () => {
        expect(divisibleByAllUpTo(2520, 10)).toBe(true);
    });

    it('should report that 2521 is not divisible by all numbers up to 10', () => {
        expect(divisibleByAllUpTo(2521, 10)).toBe(false);
    });
});
