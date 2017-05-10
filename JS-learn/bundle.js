(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// console.log('-app.js-');

// var app = app || {};
// app.mod1.doWork();  // mod1 func


//--------------------------------------

console.log('-app.js-');

var mod1 = require('./pack1');
mod1.sayHello();
mod1.sayName();

mod1.greet("en");
mod1.greet("es");




},{"./pack1":2}],2:[function(require,module,exports){
// var app = app || {};

// (function () {

//     app.mod2.doWork(); // mod2 func
//     app.mod3.doWork(); // mod3 func

//     var o = {
//         doWork: function () {
//             console.log('mod1 work...');
//         }
//     };

//     app.mod1 = o;

// })();

//---------------------------------------------

console.log('-mod1.js-');

var en = require('./mod2');
var es = require('./mod3');

var message = "Hello cts";

function sayHello() {
    console.log(message);
}

function sayName() {
    console.log('im Nag');
}


function greet(lang) {
    if (lang === "en") {
        en();
    }
    if (lang === "es") {
        es();
    }
}


// sayHello();


module.exports = {
    sayHello,
    sayName,
    greet
};
},{"./mod2":3,"./mod3":4}],3:[function(require,module,exports){
// var app = app || {};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('mod2 work...');
//         }
//     };

//     app.mod2 = o;

// })();


//---------------------------------------------------


function greet() {
    console.log("Hello...");
}
module.exports = greet;
},{}],4:[function(require,module,exports){
// var app = app || {};

// (function () {

//     var o = {
//         doWork: function () {
//             console.log('mod3 work...');
//         }
//     };

//     app.mod3 = o;

// })();

//------------------------------------



function greet() {
    console.log("Ola...");
}
module.exports = greet;
},{}]},{},[1]);
