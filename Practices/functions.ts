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

