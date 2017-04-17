import isPalindrome from '../isPalindrome';
import Problem from "../Problem";

export const Problem4: Problem = {
    number: 4,
    description: `A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.`,
    solve(): Promise<number> {
        return new Promise((resolve) => {
            let largestPalindrome = 0;
            for (let i = 999; i >= 100; i--) {
                for (let j = 999; j >= 100; j--) {
                    const product = i * j;
                    if (product > largestPalindrome && isPalindrome(product)) {
                        largestPalindrome = product;
                    }
                }
            }
            resolve(largestPalindrome);
        });
    }
};