/*
    this ==> owner of execution-context
*/


//  why we need 'this' keyword ?


// let pname = "GLOBAL";

// let person = {
//     pname: 'Nag',
//     sayName: function () {
//         // let pname = "LOCAL";
//         // console.log('im '+pname); // reads context(scope)'s data
//         // console.log('im '+person.pname); // reads obj's data
//         console.log('im '+this.pname); // reads obj's data
//     }
// };

// // person.sayName();

// let oldPerson = person;
// person = { pname: 'Ria' };

// oldPerson.sayName();

// // best-practice : never access obj's data in function with reference var...



//---------------------------------------------


//let pname = "GLOBAL";

// function displayName() {
//     console.log(pname);  // context's data
//     console.log(this.pname); // obj's data
// }

// displayName();

//---------------------------------------------

// 1.static function-binding
// 2.dynamic function-binding

//---------------------------------------------


// 1.static function-binding


// // var p1 = { name: 'Nag', sayName: function () { console.log('im '+this.name); } };
// // var p2 = { name: 'Ria', sayName: function () { console.log('im '+this.name); } };



// function sayNameForAll() {
//     console.dir(this);
//     console.log('im '+this.name);
// }
// var p1 = { name: 'Nag', sayName: sayNameForAll}
// var p2 = { name: 'Ria', sayName: sayNameForAll }

// sayNameForAll(); // im ?? ( context's owner ==> global-obj )  // function-invocation
// p1.sayName(); // im Nag  // method-invocation
// p2.sayName(); // im Ria

//---------------------------------------------


// 2.dynamic function-binding

// e.g

// re-usable library from third-party

let greetLib = {
    sayName: function (message, from) {
        console.log(message + ' im ' + this.name + " - " + from);
    }
};

// our objects
let p1 = {
    name: 'Nag'
};
let p2 = {
    name: 'Ria'
};

let e1 = {
    name: 'cts'
};


// greetLib.sayName();

// way-1
// greetLib.sayName.call(p1,"Hello","CHN"); 
// greetLib.sayName.call(p2,"Hi","AP");
// greetLib.sayName.call(e1,"Hey","Universe");  

// way-2
// greetLib.sayName.apply(p1,["Hello","CHN"]); 
// greetLib.sayName.apply(p2,["Hi","AP"]);
// greetLib.sayName.apply(e1,["Hey","Universe"]); 

// way-3
// let newF = greetLib.sayName.bind(p1, "Hello", "CHN"); 
// newF();
// newF();

// let newF2 = greetLib.sayName.bind(e1);
// newF2('hey', 'IND');
// newF2('hey', 'OTHER');

//-------------------------------------------------------


// we can invoke function in 4 ways

/*

    a. function invocation  ( this ==> global-obj )
    b. method invocation    ( this ==> invoker-obj)
    c. call/apply/bind invocation ( this ==> arg-obj)
    d. constructor invocation ( this ==> new-obj)

*/


//-------------------------------------------------------


// quiz-1



// function Person(name) {
//     this.name = name;
// }

// Person('Abc'); // context's owner


//-------------------------------------------------------


// Quiz-2

// let trainer = {
//     tname: 'Nag',
//     doTeach: function () {
//         console.log(this.tname + " teaching .js");
//         let self = this;
//         function doLearn() {
//             console.dir(this);
//             console.log(this.name+' learning .js from '+self.tname);
//         }

//         //doLearn();

//         let emp = { name: 'cts' };
//         doLearn.call(emp);

//     }
// };

// trainer.doTeach();

// // let oldTrainer = trainer;
// // trainer = { tname: 'Ria' };
// // oldTrainer.doTeach();


// let newTrainer = { tname: 'Ria' };
// trainer.doTeach.call(newTrainer);


//-------------------------------------------





// arrow-function


// syntax

// let getPrice = function () { return 100.00 };


// let getPrice = () => 100.00;
// let getPrice = (count) => count * 100.00;
// let getPrice = count => count * 100.00;
// let getPrice = (count, tax) => count * 100.00 + tax;
// let getPrice = (count, tax) => {
//     let price = count * 100.00;
//     let total = price + tax;
//     return total;
// };


// why / advantages arrow function ?

/*

    --> arrow function always bound to  current-execution-context ( in which context func has created )
    --> we can't bind arrow to any other obj staticlly or dynamically

*/



// let trainer = {
//     tname: 'Nag',
//     doTeach: function () {
//         console.log(this.tname + " teaching .js");
        
//         //let askQues = function (ques) { console.dir(this); console.log(this.tname + " anwering ques"); };
        
//         // or

//         let askQues = (ques) => { console.dir(this); console.log(this.tname + " anwering "+ques); };


//         console.log(this.tname + " finished teaching & returned askQues");
//         return askQues;
//     }
// };

// let askQues = trainer.doTeach();
// askQues('ques-1');


// let newTrainer = { tname: 'Ria' };
// askQues.call(newTrainer,"ques");  // 


//-------------------------------------------------------------------




// let invoice = {
//     num: 12345,
//     process: function () { 
//         console.log(this.num+" processed");
//     }
// };

// 

// let invoice = {
//     num: 12345,
//     process:  () => { 
//         console.log(this.num+" processed");
//     }
// };


// let invoice = {
//     num: 12345,
//     process: function () { 
//         console.log(this.num + " processed partially");
//         return function () {
//             console.log(this.num + " processed completely");
//         }
//     }
// };

// let invoice = {
//     num: 12345,
//     process: function () { 
//         console.log(this.num + " processed partially");
//         return () => {
//             console.log(this.num + " processed completely");
//         }
//     }
// };


// let completeInvoiceProcess=invoice.process();
// completeInvoiceProcess();


//-------------------------------------------------------


function Person(name,age) {
    this.name = name;
    this.age = age;

    // let self = this;    
    // // interval event on global-obj    
    // setInterval(function () { 
    //     console.dir(this);
    //     self.age++;
    //     console.log(self.name+"->"+self.age);
    // },1000)

    setInterval( () => { 
        console.dir(this);
        this.age++;
        console.log(this.name+"->"+this.age);
    },1000)


}

let p = new Person('Ria',0);

























//---------------------------------------------