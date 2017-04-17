import Problem from "../Problem";
import range from '../range';
import reduce from "../reduce";
import sum from "../sum";

export const Problem6: Problem = {
    number: 6,
    description: `The sum of the squares of the first ten natural numbers is,

1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)<sup>2</sup> = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.`,
    solve(): Promise<number> {
        return new Promise((resolve) => {
            const ceiling = 101;
            const sumOfSquares = reduce(
                range(1, ceiling),
                (carry, num) => carry + (num * num),
                0
            );
            const sumToCeiling = sum(range(1, ceiling));
            resolve(Math.abs(sumOfSquares - sumToCeiling * sumToCeiling));
        });
    }
};