/*


  How .js programs are executing ?


  Execution-Context ( scope )
  ----------------------------

  memory/stack-frame with given agrs & locals to execute instruction

  phase-1 : creation

    all the variables declared any where with 'var' keyword
    will get hoist to top with default value 'undefined'

  phase-2 : execution

    instrcuion execute in sequence.


   ------------------------------------------

   .js-runtime has one global-context + global-object by default 

    global-object:

    browser-envi ==> window
    Node.js      ==> global

    imp-note: global context executed by 'global-object'

    ------------------------------------------

    imp-note :

    every function invocation also creates new-context
    which child of context in which the function has declared.

*/


// var v = 12;
// console.log(v);


//---------------------------------------------

// var v = 12;
// function func1() {
//     console.log(v);
//     var v = 13;
// }
// func1();  // f1-context(scope)  ==> global-contex


//---------------------------------------------

// quiz

// var v = 12;

// function f1() {
//     function f2() {
//         console.log(v);
//     }
//     f2();  // f2-context  ==> f1-context
//     var v = 13;
// }
// f1(); // f1-context ==> global-context


//---------------------------------------------


// var v = 100;

// {
//     var v = 200;
// }

// console.log(v);

//---------------------------------------------

// var v = 12;
// var v = 12;

//---------------------------------------------


// problems with 'var' keyword :

/*

    ==> always get hoist ( variable available in whole context )
    ==> varibales are not block scoped
    ==> able to re-declare same variable multiple times

*/

// soln : using 'let' & const keywords

//---------------------------------------------

// console.log(v);
// let v = 12;

//---------------------------------------------

// var v = 100;

// {
//     let v = 200; // block scoped
// }

// console.log(v);

//---------------------------------------------

// let a = 12;
// let a = 12;

//---------------------------------------------


// const nagPerson = {
//     name: 'Nag',
//     age:32
// };

// // nagPerson = {};


// nagPerson.name = "Nagabhushanam";










