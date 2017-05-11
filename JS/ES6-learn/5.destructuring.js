

// destructuring ==> iterable elements to variables


// 1. Array destrucuring

// var amounts = [100, 200, 300];

// manual destructuring

// let min = amounts[0]; 
// let avg = amounts[1]; 
// let max = amounts[2];


// or

// es6

// let min;
// let avg;
// let max;
// [min, avg, max] = amounts;

// let [min, avg, max] = amounts;


// let [min, avg] = amounts;

// let [min,,max] = amounts;

// let amounts = [100, 200];
// // let [min, avg, max] = amounts;
// let [min, avg, max = 400] = amounts;

// let amounts = [100, 200, [300, 400]];

// let [min, avg, [max1, max2]] = amounts;




// 2. Object destrucuring


let person = {
    name: 'Nag',
    age:32
};

// manual

// let name = person.name;
// let age = person.age;


// es6

// let { name, age } = person;

// let { name: myName, age: myAge } = person;

let myName;
let myAge;

({ name: myName, age: myAge } = person);









