

// #1

function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7));


// 2

function foo() {
    
}

function bar() {
    foo();
}

function baz() {
    bar();
}

baz();


// 3

function foo() {
    throw new Error('oops, i hate this tnr');
}

function bar() {
    foo();
}

function baz() {
    bar();
}

baz();


// 4



function foo() {
    foo();
}
foo();

//------------------------------------------------


// 5



function longRunning() {
    var i = 0;
    while (i < 10) {
        console.log('long...');
        i++
    }
}

function shortRunning() {
    console.log('short...');
}

longRunning();
shortRunning();


//---------------------------------------


// On event


/*

    <button class="odd"> button-1 </button>
    <button class="even"> button-2 </button>

*/


console.log('start..');

$.on('.odd', 'click', function handler1(e) { 
    console.log('handling click-event on .odd elements');
});

$.on('.even', 'click', function handler2(e) { 
    console.log('handling click-event on .even elements');
});

function longRunning() {
    var i = 0;
    while (i < 10) {
        console.log('long...');
        i++
    }
}

console.log('continue with other work...');

longRunning();



