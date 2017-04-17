interface Comparator {
    (start: number, end: number): boolean;
}

function gt(start: number, end: number): boolean {
    return start > end;
}

function lt(start: number, end: number): boolean {
    return start < end;
}

export default function* range(start: number, end: number, step: number = 1) {
    const comparator: Comparator = step > 0 ? lt : gt;
    while (comparator(start, end)) {
        yield start;
        start += step;
    }
}