// let arr = [1, 2, 3, 4, 5];
// console.dir(arr);



let idMaker = {
    id: 0,
    [Symbol.iterator]: function () {
        return {
            next: () => {
                return {
                    value: this.id > 10 ? undefined : ++this.id,
                    done: this.id > 10 ? true : false
                };
            }
        }
    }
};

//----------------------------------------


//

// for (let id of idMaker) {
//     console.log(id);
// }


// let ids = [...idMaker];


//let [id1, id2, id3, id4] = idMaker;
