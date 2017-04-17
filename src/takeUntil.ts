export default function* takeUntil<T>(
    iterable: Iterable<T>,
    stopCondition: (item: T) => boolean
) {
    for (let item of iterable) {
        if (stopCondition(item)) {
            break;
        }
        yield item;
    }
}