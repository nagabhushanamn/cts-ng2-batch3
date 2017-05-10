"use strict";


/*
    data-types

    a. primitive

        - string
        - number
        - boolean
        - undefined
        - symbol

    b. reference  ==> objects

*/


/*

    How to create object .js lang ?

    syntax

    var ref=new Constructor();

*/

// ES5

// function Person(name) {
//     this.name = name;
// }

// ES6

// class Person{
//     constructor(name) {
//         this.name = name;
//     }
// }


//----------------------------------------------------


// Literal-style objects

// a. Object

// var config = new Object(); // obj wrapper
// confif.url = "http://";
// config.method = "GET";
// config.contentType = "application.json";
// config.success = function (resp){}

// or

// var config = {
//     url: 'http://',
//     method: 'GET',
//     success: function () { }
// };

//----------------------------------------------------

// b. Array


// var arr = new Array();
// arr.push('item-1');
// arr.push('item-2');
// arr.push('item-3');

// // or

// var arr = ["item-1"];


//----------------------------------------------------

// c.Reg Exp


// color-code  pattern : /\s*^#?[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}\s*$/


// var pattern = "^\\s*#?[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}\\s*$";
// var re = new RegExp(pattern);


// var re = /\s*^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\s*$/

//----------------------------------------------------

// d. Function

// var add = new Function("n1", "n2", "var r=n1+n2;return r;");

// or

// function add(n1, n2) {
//     var r=n1+n2;return r;
// }


//----------------------------------------------------


// by default .js objs are extensible & configurable 

// var person = {
//     name:'Nag'
// };

// Object.preventExtensions(person);
// Object.seal(person);
// Object.freeze(person);

// person.newProp = "val "
// delete person.name;
// person.name = "";


//--------------------------------------------------------


// var person = {
//     _name: 'Nag',
//     set name(name) {
//         if (name) {
//             this._name = name;
//         }
//     },
//     get name() {
//         return this._name;
//     }
// };

// person.name = ""; // set
// console.log(person.name); // get


// //--------------------------------------------------------

