function swap(x, y) {
    let temp;
    temp = x;
    x = y;
    y = temp;
    console.log(`In passByValue function x = ${x}, y = ${y}`);
}
let x = 4, y = 5;
console.log(`Before calling passByValue function x = ${x}, y = ${y}`);
swap(x, y);
console.log(`After calling passByValue function x = ${x}, y = ${y}`);