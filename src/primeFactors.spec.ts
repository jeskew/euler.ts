import { primeFactors } from './primeFactors';
import * as test from 'tape';

test('primeFactors', t => {
    t.plan(3)

    t.deepEqual(
        primeFactors(6),
        [2, 3],
        'should return the prime factors for a non-prime number'
    );

    t.deepEqual(
        primeFactors(12),
        [2, 2, 3],
        'should include duplicates in the returned factors'
    );

    t.deepEqual(
        primeFactors(21),
        [3, 7],
        `should include prime factors that exceed the number's square root`
    );
});
