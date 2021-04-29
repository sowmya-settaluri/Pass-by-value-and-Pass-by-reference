function passByReference(obj) {
    let temp;
    temp = obj.x;
    obj.x = obj.y;
    obj.y = temp;
    console.log(`Inside the passByReference function x = ${obj.x}, y = ${obj.y}`);
}
let obj = {
    x : 10, 
    y : 20
}
console.log(" ");
console.log(`Before calling the passByReference function x = ${obj.x}, y = ${obj.y}`);
passByReference(obj);
console.log(`After calling the passByReference function x = ${obj.x}, y = ${obj.y}`);