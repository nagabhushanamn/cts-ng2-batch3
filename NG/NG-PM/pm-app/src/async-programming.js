// .js lang 

/*
    how to do async programming .js lang ?

        from es6
    --> using promise API
        from es7
    --> Reactive Extensions API ( RxJS) : Observable Streams
    --> Async Await 

*/

//------------------------------------------------------

// #1

// let friend = {
//   askHelp: function () {
//     let promise = new Promise((resolve, reject) => {
//       //.............
//       setTimeout(function () {
//         console.log('resolving given promise with result...');
//         //resolve("SOME-HELP");
//         reject("Sorry buddy");
//       }, 5000); // e.g API calls to server side.
//     });
//     return promise;
//   }
// };

// let me = {
//   doWork: function () {
//     console.log('me: started some work..requesting some help on friend');
//     let promise = friend.askHelp();
//     console.log("with promise , deferring actions to future");
//     promise.then(function (help) {
//       console.log(' thanks buddy for help : ' + help);
//     }, function (failureReason) {
//       console.log(failureReason + ' : no propbs,thanks for trying');
//     });
//     console.log('me : continue on other work...finised');
//   }
// };


// me.doWork();


//------------------------------------------------------



// e.g  Array stream ex

// let arr = [1, 2, 3, 4, 5, 6];
// arr.map(x => x * 2)
//   .filter(x => x > 5)
//   .forEach(x => console.log(x))



//------------------------------------------------------

// Reactive Extensions with JavaScript ( RxJS)

// var Rx = require('rxjs/Rx'); //


// // observable stream 
// const observableStream = Rx.Observable.create((observer) => {
//   // on websocket ,   when we receive new updates from server, we emit event by new element to stream
//   let count = 0;
//   setInterval(() => {
//     console.log('inc count');
//     count++;
//     observer.next(count);
//   }, 1000);
// });

// let s=observableStream.subscribe((message) => {
//     console.log("subscriber-1 " + message);
//     if (message === 10) s.unsubscribe();
// });

// observableStream.subscribe((message) => {
//   console.log("subscriber-2" + message);
// });

//---------------------------------------------------------------


// let observableStream = Rx.Observable.range(1, 10)
//   .map(function (x) {
//     if (x % 2 === 0) return x
//     else return 0;
//   });


// observableStream.subscribe(n => console.log(n));


//----------------------------------------------------


// var observable = Rx.Observable.range(1, 10)
//     .map(x => {
//         if (x === 5) {
//             throw new Error('Something Went Wrong');
//         } else {
//             return x; // event
//         }
//         //return x;
//     })
//     .filter(x => x > 0);


// observable.subscribe(function (result) {
//     console.log(result);
// }, function (error) {
//     console.log(error);
// }, function (message) {
//     console.log('done...');
// });


//-----------------------------------------------

// Async Await 

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 10000);
  });
}

async function add1(x) {
  var promise1 = resolveAfter2Seconds(20);
  var promise2 = resolveAfter2Seconds(30);
  return x + await promise1 + await promise2;
}


add1(10).then(v => {
  console.log(v); // prints 60 after 2 seconds.
});


console.log('cont other work..');