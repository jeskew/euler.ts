export function *triangleNumbers() {
    let index = 1;
    let triangleNumber = 0;
    while (true) {
        triangleNumber += index++;
        yield triangleNumber;
    }
}
