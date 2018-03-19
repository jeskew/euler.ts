export function isPalindrome(stringable: any): boolean {
    const string = String(stringable);
    return string === string.split('').reverse().join('');
}
