import Problem from "../Problem";
import takeUntil from "../takeUntil";
import primes from "../primes";

export const Problem7: Problem = {
    number: 7,
    description: `By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?`,
    solve(): Promise<number> {
        return new Promise(resolve => {
            let index = 0;
            let curr: IteratorResult<number>;
            let last: number = 0;
            const primesIter = takeUntil(primes(), () => index++ === 10001);
            do {
                curr = primesIter.next();
                if (curr.value !== undefined) {
                    last = curr.value;
                }
            } while (!curr.done);
            resolve(last);
        });
    }
};