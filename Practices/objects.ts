
const personNew= {
    name: 'Jack',
    age: 26,
    isStudent: false
}

 console.log(personNew);


 const personNew2: { name: string, age: number, isStudent: boolean} =
 {
    name: 'Tom',
    age: 27,
    isStudent: true
 }

 console.log(personNew2);


 const contactInfo= {
    email: "tom123@gmail.com",
    phone: 1234
 }

 const mergedPerson= {...personNew, ...contactInfo}

 console.log(mergedPerson);

type Person={
    name: string,
    age: number
}

const deep: Person={
    name:'John',
    age: 23
}

console.log(deep);


