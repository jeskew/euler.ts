import { triangleNumbers } from './triangleNumbers';
import { take } from '@jsq/seq';
import * as test from 'tape';

test('triangleNumbers', t => {
    t.plan(1)

    t.deepEqual(
        [...take(10, triangleNumbers())],
        [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]
    );
});
