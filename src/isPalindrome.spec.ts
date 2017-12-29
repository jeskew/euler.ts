import {isPalindrome} from "./isPalindrome";

describe('isPalindrome', () => {
    it('should return true if the provided value is a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    it('should return false otherwise', () => {
        expect(isPalindrome('car')).toBe(false);
    });

    it('should case provided values to strings', () => {
        expect(isPalindrome(909)).toBe(true);
    });
});
