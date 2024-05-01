"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(20, 23);
const pooruser = {
    name: "taz",
    balace: 0,
    newBalance(balace) {
        return `new balance is ${this.balace + balace}`;
    }
};
const arr = [21, 25, 45, 4];
const arraySqar = arr.map((ele) => ele * ele);
console.log(arraySqar);
