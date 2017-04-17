import Problem from "../Problem";
import sum from "../sum";
import filter from "../filter";
import range from "../range";

export const Problem1: Problem = {
    number: 1,
    description: `If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.`,
    solve(): Promise<number> {
        return Promise.resolve<number>(sum(
            filter(range(1, 1000), item => item % 3 === 0 || item % 5 === 0)
        ));
    }
};