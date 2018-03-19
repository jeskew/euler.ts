import { divisors } from './divisors';
import * as test from 'tape';

test('divisors', t => {
    const knownDivisorsMap: Array<[number, Array<number>]> = [
        [1, [1]],
        [3, [1, 3]],
        [6, [1, 2, 3, 6]],
        [10, [1, 2, 5, 10]],
        [15, [1, 3, 5, 15]],
        [21, [1, 3, 7, 21]],
        [28, [1, 2, 4, 7, 14, 28]],
    ];

    t.plan(knownDivisorsMap.length);

    for (const [num, knownDivisors] of knownDivisorsMap) {
        t.deepEqual([...divisors(num)].sort((a, b) => a - b), knownDivisors);
    }
});
