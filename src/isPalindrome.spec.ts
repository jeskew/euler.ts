import { isPalindrome } from './isPalindrome';
import * as test from 'tape';

test('isPalindrome', t => {
    t.plan(3)

    t.equal(isPalindrome('racecar'), true);

    t.equal(isPalindrome('car'), false);

    t.equal(
        isPalindrome(909),
        true,
        'should convert provided values to strings'
    );
});
