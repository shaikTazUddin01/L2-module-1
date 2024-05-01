{
    type frontendDeveloper= 'fakibaz'|'jsDeveloper';
    type backendDeveloper = 'fakibaz'|'expressDeveloper'

    type fullstack = frontendDeveloper | backendDeveloper;

    const fullstack:fullstack="expressDeveloper";

    type sobJanta={
        skills:string[],
        Designation1:"front end developer"
    }
    type alpojanta={
        skills:string[],
        Designation2:"back end developer"
    }

    type mFullStack = sobJanta & alpojanta;

    const mFullStacks:mFullStack={
        skills:['html','css','js'],
        Designation1:"front end developer",
        Designation2:"back end developer"
    }
}