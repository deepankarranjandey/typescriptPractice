// global scope

const globalVar= 10;

function randomFunction()
{
    console.log(globalVar);
}


// local scope

function randomFunctionLocal()
{
    const localVar= 10;
    console.log(localVar);
}


// block scope


if(true)
{
    const blockVar=30;
    console.log(blockVar);
}

