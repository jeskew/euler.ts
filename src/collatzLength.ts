const KNOWN_LENGTHS = new Map<number, number>();

export function collatzLength(cardinal: number): number {
    let steps = 1;
    for (let current = cardinal; current !== 1; steps++) {
        let memoized = KNOWN_LENGTHS.get(current);
        if (memoized) {
            steps += memoized - 1;
            break;
        }

        current = current % 2 === 0
            ? current / 2
            : current * 3 + 1;
    }

    KNOWN_LENGTHS.set(cardinal, steps);
    return steps;
}

// export function collatzLength(cardinal: number): number {
//     if (cardinal === 1) return 1;

//     const memoized = KNOWN_LENGTHS.get(cardinal);
//     if (memoized) {
//         return memoized;
//     }

//     let length = 1 + collatzLength(
//         cardinal % 2 === 0 ? cardinal / 2 : cardinal * 3 + 1
//     );
//     KNOWN_LENGTHS.set(cardinal, length);
//     return length;
// }
