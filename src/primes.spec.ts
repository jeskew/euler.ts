import { primes } from './primes';
import * as test from 'tape';

test('primes', t => {
    t.plan(1)

    const [first, second, third, fourth, fifth] = primes();

    t.deepEqual([first, second, third, fourth, fifth], [2, 3, 5, 7, 11]);
});
