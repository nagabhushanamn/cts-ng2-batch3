

// // ES5

// function func(a, b) {
    
//     // validate given args then assign default-values
    
//     // way-1

//     // if (!a) {
//     //     a = 1;
//     // }
//     // if (!b) {
//     //     b = 2;
//     // }

//     // way-2
//     a = a || 1;
//     b = b || 2;


//     console.log(a);
//     console.log(b);
// }

// func(undefined,20);


//---------------------------------------



// ES6

function func(a=1, b=2) {
    console.log(a);
    console.log(b);
}

func(undefined,20);


