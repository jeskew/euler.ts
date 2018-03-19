import { sieveOfEratosthenes } from './sieveOfEratosthenes';
import * as test from 'tape';

test('sieveOfEratosthenes', t => {
    t.plan(1);

    t.deepEqual([...sieveOfEratosthenes(10)], [2, 3, 5, 7]);
});
