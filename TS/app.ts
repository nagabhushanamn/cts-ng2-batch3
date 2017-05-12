

// class Person{
//     name: string;
//     sayName() :void{
//         console.log('i am '+this.name);
//     }
// }

// let person = new Person();
// person.name = "Nag";

// person.sayName();

// ---------------------------------------------------


// Library

// enum Category { LANGUAGE = 1, FRAMEWORK, OTHER };


// function getAllBooks() {
//     let books = [
//         { title: 'JavaScript', author: 'Nag', available: true, category: Category.LANGUAGE },
//         { title: 'TypeScript', author: 'Ria', available: false, category: Category.LANGUAGE },
//         { title: 'Angular', author: 'Nag', available: true, category: Category.FRAMEWORK }
//     ];
//     return books;
// }

// //.....

// // Use-case: 1

// // function logFirstAvaialbleBook(books:Array<any>):void {
// //     let totalBooks:number = books.length;
// //     let firstAvailable:string = '';

// //     for (let book of books) {
// //         if (book.available) {
// //             firstAvailable = book.title;
// //             break;
// //         }
// //     }

// //     console.log(`Total books : ${totalBooks}`);
// //     console.log(`First Available : ${firstAvailable}`);
// // }


// // const allBooks = getAllBooks();
// // allBooks.push({ title: 'New Book', author: 'anon', available: true,category:Category.OTHER });
// // logFirstAvaialbleBook([]);


// //------------------------------------------------------------------------


// function getTitlesByCategory(categoryFilter: Category): Array<string> {

//     console.log(`getting titles in ${Category[categoryFilter]}`);
//     let filteredTitles: string[] = [];

//     for (let book of getAllBooks()) {
//         if (book.category === categoryFilter) {
//             filteredTitles.push(book.title);
//         }
//     }
//     return filteredTitles;
// }

// function logBookTitles(titles: string[]): void {
//     titles.forEach(function (title) {
//         console.log(title);
//     });
// }


// let titles = getTitlesByCategory(Category.LANGUAGE);
// logBookTitles(titles);

//---------------------------------------------------------

// function sayHello(name:string):string {
//     return "Hello " + name;
// }

// console.log(sayHello("Nag"));

//---------------------------------------------------------


// let items = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10];

// // let evenNums = items.filter(function (n) { return n % 2 });
// let evenNums = items.filter(n => n % 2);

// console.log(evenNums);

//---------------------------------------------------------



// Function Type

// let greetFunc : (string) => string;  // func type

// function sayHello(name) {
//     return "Hello " + name;
// }

// function sayHi(name) {
//     return "Hi " + name;
// }

// function func() {
    
// }

// greetFunc = sayHello;

// greetFunc("Nag");


//---------------------------------------------------------

// Overloaded functions

// function getFood(): string;
// function getFood(pay: number): string;
// function getFood(inp?: any):string {
//     if (inp === undefined) {
//         return "No Food";
//     }
//     if (typeof inp === "number") {
//         return "Biryani";
//     }
// }

// console.log(getFood());

//---------------------------------------------------------



//  Interfaces
// ------------------

/*
   --> contract b/w dependent & dependency
   --> abstraction of dependecy implementation

*/



// interface Wheel{
//     rotate: () => void; // abstract
// }

// // dependency(s)

// class MRFWheel implements Wheel{
//     rotate() {
//         console.log('MRF-Wheel rotating...');
//     }
// }

// class CEATWheel implements Wheel{
//     rotate() {
//         console.log('MRF-Wheel rotating...');
//     }
// }


// // dependent
// class Car{
//     wheel: Wheel;
//     constructor(wheel: Wheel) {
//         this.wheel = wheel;
//     }
//     move() {
//         this.wheel.rotate();
//         console.log("car moving...");
//     }
// }

// let mrfWheel = new MRFWheel();
// let ceatWheel = new CEATWheel();

// let car = new Car(ceatWheel);
// car.move();


//---------------------------------------------



// interface IProduct{
//     id: number;
//     name: string;
//     price: number;
//     description?: string;
//     buy:()=>void
// }


// // class Product implements IProduct{
// //     id: number;
// //     name: string;
// //     price: number;
// //     description?: string;
// //     buy(){

// //     }
// // }

// let product:IProduct={id:23123,name:"Laptop",price:123123,buy:()=>{}};



//--------------------------------------------------------



// classes


// class Product{
//     public name:string;
//     _price:number; // indication , this property is internal rpoperty
//     constructor(name:string,price?:number){
//         this.name=name;
//         this._price=price;
//     }
//     set price(price){
//         if(price>0){
//             this._price=price;
//         }
//     }
//     get price(){
//         return this._price;
//     }
// }

// let product=new Product('laptop');
// product.price=100;  // set

// product.price=0;

// console.log(product.price);// get

//--------------------------------------------------------------


// abstract class


// abstract class LivingThing{
//     eat(){}
//     sleep(){};
//     abstract work():void;
// }


// class Human extends LivingThing{
//     work(){}
// }

// class Animal extends LivingThing{
//     work(){}
// }

// // let live=new LivingThing();


//--------------------------------------------------------------





