import reduce from "./reduce";

export default function sum(iterable: Iterable<number>): number {
    return reduce(iterable, (carry, value) => carry + value, 0);
}