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

// console.log('-mod1.js-');

// var en = require('./mod2');
// var es = require('./mod3');

// var message = "Hello cts";

// function sayHello() {
//     console.log(message);
// }

// function sayName() {
//     console.log('im Nag');
// }


// function greet(lang) {
//     if (lang === "en") {
//         en();
//     }
//     if (lang === "es") {
//         es();
//     }
// }


// // sayHello();


// module.exports = {
//     sayHello,
//     sayName,
//     greet
// };

//---------------------------------------------


// export var productId = 123;
// export var productName = "Laptop";

// or

// var productId = 123;
// var productName = "Laptop";
// export {productId,productName}


//---------------------------------------------


// component module

class MainComponent{

}
class OtherComponent{

}

export default MainComponent;
export { OtherComponent };