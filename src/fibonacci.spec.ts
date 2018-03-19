import { fibonacci } from './fibonacci';
import * as test from 'tape';

test('fibonacci', t => {
    t.plan(1);

    const [first, second, third, fouth, fifth, sixth] = fibonacci();

    t.deepEqual(
        [first, second, third, fouth, fifth, sixth],
        [1, 1, 2, 3, 5, 8]
    );
});
