function display()
{
    console.log('I am in first function');
}

display();


function displayWithParams(price: number, quantity: number)
{
    return price*quantity;
}

console.log(displayWithParams(200,3));


function greet(name: string, greetMessage?: string)
{
    if(greetMessage)
    {
        return `Hi ${name}, ${greetMessage}`
    }
    else
    {
        return `Hi ${name}`
    }
}

console.log(greet('Deepankar', 'Welecome to Team'));
console.log(greet('Deep'));


function add (a: number, b: number=0)
{
    console.log(a+b);
}

add(1,2);
add(1);
