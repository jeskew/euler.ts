import { divisibleByAllUpTo } from './divisibleByAllUpTo';
import * as test from 'tape';

test('divisibleByAllUpTo', t => {
    t.plan(2);

    t.equal(
        divisibleByAllUpTo(2520, 10),
        true,
        'should report that 2520 is divisible by all numbers up to 10'
    );

    t.equal(
        divisibleByAllUpTo(2521, 10),
        false,
        'should report that 2521 is not divisible by all numbers up to 10'
    );
});
