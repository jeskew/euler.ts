/**
 * A Pythagorean triplet is a set of three natural numbers, <em>a < b < c</em>,
 * for which,
 *
 * `a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>`
 *
 * For example, `3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>`.
 *
 * There exists exactly one Pythagorean triplet for which *a + b + c* =
 * 1000
 *
 * Find the product *abc*
 */
export const p009 = () => {
    const tripleSum = 1000
    for (let b = tripleSum; b > 0; b--) {
        for (let a = b; a > 0; a--) {
            const c = tripleSum - a - b
            if (c > b && a * a + b * b === c * c) {
                return c * b * a
            }
        }
    }
    /* istanbul ignore next */
    throw new Error('Unable to locate triple');
}
