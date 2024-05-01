{
    const arr1:string[]=['taz','raz']
    const arr2:string[]=['jony','bony'];

    arr1.push(...arr2)

    const tainar1={
        name:"mir",
        age:23
    }
    const tainer2={
        name:'muhammad',
        age:23
    }
    const ourTainer={
        ...tainar1,
        ...tainer2
    }
    console.log(ourTainer);
}