{
    // type alius
    type User={
        name:string,
        email:string,
        address:string,
        contact?:string
    }

    const user1:User={
        name:'taz',
        email:"taz@gaml.com",
        address:'jkgf',
        contact:"mollah para"
    }

    const user2:User={
        name:'taz',
        email:"taz@gaml.com",
        address:'jkgf',
        contact:"mollah para"
    }

    type ADD=(num1:number,num2:number)=>number
  
    const add:ADD=(num1,num2)=>{
        return num1+num2
    }
}