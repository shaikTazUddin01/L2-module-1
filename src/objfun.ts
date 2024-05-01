function add(num1:number,num2:number):number {
    return num1+num2
}

add(20,23)

const pooruser={
    name:"taz",
    balace:0,
    newBalance(balace:number):string{
        return `new balance is ${this.balace+balace}`;
    }
}
const arr:number[]=[21,25,45,4];

const arraySqar:number[]=arr.map((ele:number):number=>ele*ele)

console.log(arraySqar)
