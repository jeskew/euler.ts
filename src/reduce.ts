export default function reduce<C,E>(
    iterable: Iterable<E>,
    reducer: (carry: C, item: E) => C,
    initialValue: C
): C {
    for (let item of iterable) {
        initialValue = reducer(initialValue, item);
    }

    return initialValue;
}
