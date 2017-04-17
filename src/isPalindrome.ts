interface Stringable {
    toString(): string;
}

export default function isPalindrome(stringable: Stringable): boolean {
    const string = stringable.toString();
    return string === string.split('').reverse().join('');
}