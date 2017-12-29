export function* fibonacci(): IterableIterator<number> {
    let a = 1;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}