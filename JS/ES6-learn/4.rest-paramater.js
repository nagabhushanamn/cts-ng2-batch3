



function func(a,...rest) {
    console.log(a);
    //console.dir(arguments);
    console.log(Array.isArray(rest));
    console.log(rest);
}

func(1,2,3,4,5,6);