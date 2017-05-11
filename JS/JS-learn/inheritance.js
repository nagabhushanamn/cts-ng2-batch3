/*

    how .js-lang support inheritance ?

    ==> using protototypes

    object ----> object(prototype)



*/


// ES5 syntax


// person class

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.sayName = function () {
//     //     console.log('im ' + this.name);
//     // }
//     // this.sayAge = function () {
//     //     console.log('im ' + this.age + " old");
//     // }
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name);
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }

// var p1 = new Person("Nag", 32);
// var p2 = new Person("Ria", 2);


// employee class

// function Employee(name, age, salary) {
//     Person.call(this,name,age);
//     this.salary = salary;
// }
// Employee.prototype = new Person();
// Employee.prototype.saySalary = function () { 
//     console.log('i get '+this.salary);
// }

// var emp = new Employee("Nag", 32, 10000.00);


//-------------------------------------------------------------


// ES6  syntax

//classes and inheritance


class Person {

    constructor(name, age) {
        console.log('Person::constructor');
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log('im ' + this.name);
    }

    sayAge() {
        console.log('im ' + this.age + " old");
    }
}

// var p1 = new Person("Nag", 32);
// var p2 = new Person("Ria", 2);

class Employee extends Person {

    constructor(name, age, salary) {
        super(name, age);
        console.log("Employee::constructor");
        this.salary = salary;
    }
    saySalary() {
        console.log('i get ' + this.salary);
    }
    getBonus() {
        return this.salary * 0.02;
    }
}

// var emp = new Employee("Nag", 32, 1000);

class Boss extends Employee {

    constructor(name, age, salary) {
        super(name, age, salary);
    }
    getBonus() {
        return this.salary * 0.2 + super.getBonus();
    }
}

var boss = new Boss("Boss", 50, 1000);


class Abc {
    static staMethod() {
        console.log('Abc.staMethod()');
    }
}
Abc.staVar = 12;
Abc.staMethod();