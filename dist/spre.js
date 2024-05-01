"use strict";
{
    const arr1 = ['taz', 'raz'];
    const arr2 = ['jony', 'bony'];
    arr1.push(...arr2);
    const tainar1 = {
        name: "mir",
        age: 23
    };
    const tainer2 = {
        name: 'muhammad',
        age: 23
    };
    const outTainer = Object.assign(Object.assign({}, tainar1), tainer2);
    console.log(outTainer);
}
