
// array literal
const fruits: string[]= ['apple', 'banana', 'cherry'];


// array constructor
const numbers: number[]= new Array(1,2,3,4,5);


// empty array

const emptyArray: string[]=[];

console.log(fruits[0]);
console.log(fruits[2]);


console.log(numbers[2]);
numbers[2]=10;
console.log(numbers[2]);

// add a value in last

numbers.push(6);
console.log(numbers[5]);

// remove a new value from last
numbers.pop();
console.log(numbers[5]);

// remove first number

console.log(numbers[0]);

numbers.shift();
console.log(numbers[0]);


numbers.unshift(1);
console.log(numbers[0]);


const sliceArray = numbers.slice(1,3); 
console.log(sliceArray);

const doubleArray = numbers.map((num)=> num*2);
console.log(doubleArray);

const filteredArray = numbers.filter((num)=> num>2 );
console.log(numbers)
console.log(filteredArray)


// read only arrays

const readyOnlyArr: readonly number[]= [1,2,3];

console.log(readyOnlyArr)



