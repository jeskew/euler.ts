export default function divisibleByAllUpTo(
    dividend: number,
    ceiling: number
): boolean {
    for (let i = ceiling; i > 0; i--) {
        if (dividend % i !== 0) {
            return false;
        }
    }

    return true;
}