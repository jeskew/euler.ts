import { collatzLength } from './collatzLength';
import * as test from 'tape';

test('collatzLength', t => {
    t.plan(3);

    t.equal(collatzLength(1), 1);

    t.equal(collatzLength(13), 10);

    t.equal(collatzLength(13), 10);
});
