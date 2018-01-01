export function divisors(num: number): Set<number> {
    const out = new Set<number>();

    for (let i = 1, ceiling = Math.ceil(Math.sqrt(num + 1)); i <= ceiling; i++) {
        if (i * i === num) {
            out.add(i);
        } else if (num % i === 0) {
            out.add(i);
            out.add(num / i);
        }
    }

    return out;
}
