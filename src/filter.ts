export default function* filter<T>(
    iterable: Iterable<T>,
    filterFn: (item: T) => boolean = (item) => Boolean(item)
): IterableIterator<T> {
    for (let value of iterable) {
        if (filterFn(value)) {
            yield value;
        }
    }
}