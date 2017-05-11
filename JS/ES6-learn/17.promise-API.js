// .js-lang, we can invoke func in 2 ways

/*

    1. sync invocation
    2. async invocation

*/

// sync invocation


// function f1() {
//     //..
// }

// function f2() {
//     //..
//     f1(); // sync ...............  blocks currenct execution context
//     //..
// }


//----------------------------------------------------------


// 2. async invocation


//----------------------------------------------------------

// way-1

// imp-note L all event-handler executes async in .js-runime

// eventEmitter.on('some-event', function (e) { 
//     //...
// });


//-----------------------------------------------------------

// way-2 : using Promise API    ==> async programming in .js-lang

// way-3 : RxJS Programming



// hotel-module

let hotel = {
    getCoffee: function () {
        //...........
        let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                console.log('resolve hotel promise...');
                resolve("capi");
                //reject("No Milk");
            }, 5000);

        });
        return promise;
    }
};

let cafe = {
    getCookies: function () {
        //...........
        let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                console.log('resolve/reject cafe promise...');
                resolve("bisc");
                //reject("No Cookies");
            }, 2000);

        });
        return promise;
    }
};


// trainer-module

let trainer = {
    doTeach: function () {
        console.log('teaching....');
        console.log('need coffee, requesting hotel for coffee');
        let promise = hotel.getCoffee();
        let promise2 = cafe.getCookies();
        console.log('got promise.. deferring actions to future');
        // Promise.all([promise,promise2])
        Promise.race([promise, promise2])
            .then((party) => {
                console.log('yummy ' + party);
            }, (error) => {
                console.log('ooops ' + error);
            });
        console.log('continuing on further teaching.. ends');
    }
};

trainer.doTeach();