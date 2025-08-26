// i am practiceing js...
// if (true) {
//     var varVariable = 'i am from var';
// }
// console.log(varVariable);

// if (true) {
//     let letVariable = 'i am from let';
// }

// console.log(letVariable);

// let one = 10;
// function sum() {
//     let two = 20;
//     return function() {
//         return one + two;
//     }
// }
// let resault = sum();
// console.dir(resault);

// let age = 20;

// let resault = age === 20 ? 'this is true' : 'this is false';
// console.log(resault);

// let arr = [
//     'mehedi',
//     'iyadi',
//     'sayeedi'
// ];

// arr.find(function (value, index, array) {
//     // console.log(value);
//     return value = 'iyadi';

// });
// console.log(arr);

// let name = 'i am from bangladesh';
// console.log(name);

// function bankAccount(initialValue) {
//     let value = initialValue;
//     let demo = 1000;
//     function returnable() {
//         return value + demo;
//     }
//     return returnable;
// }

// let account = bankAccount(1000);
// console.dir(account);
// console.log(account());
// resault()

// function createCounter(counterNumber) {
//     let count = counterNumber;

//     return function () {
//         count++;
//         if (count > 13) {
//             console.log('you have get 13');
//         } else {
//             console.log(count);
//         }
//     };
// }

// let counter = createCounter(10);
// counter(); // 1
// counter(); // 2
// counter(); // 3
// counter();
// counter();

// let mySec = 'javascript is awesome';
// function secretMessage(msg) {
//     return function() {
//         // console.log(msg);
//         return msg
//     }
// }

// const msgResult = secretMessage(mySec);
// console.log(msgResult());

// function stopTime() {
//     let startingTime = Date.now();
//     function delayTime() {
//         console.log(Date.now - startingTime);
//     }
//     return delayTime;
// }
// // console.log(Date.now());
// // console.log(stopTime());
// let resaultTime = stopTime();

// for (var i = 0; i <= 10; i++) {
//     console.log(i);

// }
// resaultTime();

// let nickName;
// function asynch() {
//     let men = 'i am a man';
//     nickName = 'Mehedi';
//     return function () {
//         setTimeout(() => {
//             console.log(nickName);
//             console.log(men);

//         }, 2000);
//     }
// }
// let result = asynch();

// nickName = 'iyadi';
// console.dir(asynch);
// console.dir(result);
// console.log(result());

//! hoisting in js...
// console.log(x);// undefine
// var x = 5;

// sayHello();// Hello

// function sayHello() {
//     console.log("Hello");
// }

// console.log(y);// referance error
// let y = 10;

// greet();// undefine.
// var greet = function () {
//     console.log("Hi");
// };

//! Prototype in JS...
// let person = {
//     name: 'Mehedi Hasan',
//     age: 20,
//     phone: '01617531206',
//     height: '5.5F',
//     weight: '50KG',
// }

// console.log(person);
// console.table(person);
// console.dir(person);

// const personComonMethods = {
//     eat() {
//         console.log('person is eating.');
//     },
//     sleep() {
//         console.log('person is sleeping.');
//     },
// }

// function person(name, age, nationality) {
//     let person = Object.create(personComonMethods);
//     person.name = name;
//     person.age = age;
//     person.nationality = nationality;

//     // person.eat = personComonMethods.eat;
//     // person.sleep = personComonMethods.sleep;
//     return person;
// }

// let mehedi = person('Mehedi', 20, 'Bangladesh');
// console.log(mehedi);

// const captain = {
//     name: 'Mehedi hasan',
//     age: 20,
//     country: 'bangladesh',
// }
// const captaine2 = {
//     position: 'GK',
//     number: 21,
// }

// const player = Object.create(captain);
// console.log(player.name);
// console.log(player.number);

// function PersonFun(name, age) {
//     let person = Object.create(PersonFun.prototype);
//     person.name = name;
//     person.age = age;
//     return person;
// }

// function PersonFun(name, age) {
//     // let person = Object.create(PersonFun.prototype);
//     this.name = name;
//     this.age = age;
//     // return person;
// }

// PersonFun.prototype = {
//     play() {
//         console.log('person is playing football.');
//     },
//     eat() {
//         console.log('person is eating rice.')
//     },
// }

// class MyClass {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     walk(){
//         console.log(`${this.name} is walking.`)
//     }
// }

// let mehedi = new PersonFun('Mehedi', 20);
// let iyadi = new MyClass('iyadi', 17);
// console.log(iyadi);
// console.log(mehedi);
// console.dir(PersonFun);

// function Nothing(name) {
//     this.name = name;
// }
// let me = new Nothing('Mehedi');
// console.log(me);

// let name = 'Mehedi Hasan';
// console.log(name);

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// }
// Person.prototype = {
//     eat: function() {
//         console.log(`${this.name} is Eating`);
//     },
// }
// let mehedi = new Person('Mehedi Hasan', 20);
// let iyadi = new Person('Iyadi Hasan', 17);

// let human = {
//     name: 'Mehedi',
//     age: 20,
//     nationalioty: 'Bangladeshi',
// }

// function Person(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;

// }
// Person.prototype = {
//     eat: function() {
//         console.log(`${this.name} is Eating Rice.`);
//     },
// }
// let mehedi = new Person('Mehedi Hasan', 20, '49KG');
// let iyadi = new Person('Iyaid Hasan', 17, '50KG');
// console.log(iyadi);
// console.log(mehedi);

// var FunName = function () {};
// let makeObj = new FunName();
// console.log(makeObj);

//! makeing a bultin function in mother Object prototype.!
// Object.prototype.mehedi = function(name) {
//     if(name) {
//         alert(`My name is ${name}`)
//     }else {
//         alert('please insert a argument!')
//     }
// }

// let name = 'Mehedi Hasan';
// // name.mehedi('iyadi Hasan');
// let arr = ['Mehedi', 'iyadi'];
// // arr.mehedi()
// console.log(arr)
//! done to create a biult in ethod..!

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// function Footballer(name, age, position, country) {
//     Person.call(this, name, age);
//     // this.name = name;
//     // this.age = age;
//     this.position = position;
//     this.country = country;
// }

// Person.prototype = {
//     eat: function() {
//         console.log(`${this.name} is Eating Rice`);
//     },
//     sleep: function() {
//         console.log(`${this.name} is Sleeping.`)
//     }
// }

// Footballer.prototype = Object.create(Person.prototype);
// Footballer.prototype.shoot = function() {
//     console.log(`${this.name} has been shooted.!`);
// }
// Footballer.prototype.constructor = Footballer;

// let ronaldo = new Person('Cristiano Ronaldo', 40);
// let messi = new Footballer('Lionel Messi', 38, 'Striker', 'Argentina');
// console.log(messi);
// console.log(ronaldo);
// console.log(ronaldo.position)

// let printPlayerName = function(obj) {
//     obj.printName = function() {
//         console.log(this.name);
//     }
// }

// let mehedi = {
//     name: 'Mehedi',
//     age: 20,
// }
// let iyadi = {
//     name: 'Iyadi',
//     age: 17,
// }
// printPlayerName(mehedi);
// printPlayerName(iyadi);
// mehedi.printName();
// iyadi.printName();

// let person = {
//     name: 'Mehedi',
//     age: 20,
//     printName: function() {
//         console.log(this.name);
//     },
//     father: {
//         name: 'Kabir',
//         printName: function() {
//             console.log(this.name);
//         }
//     }
// }
// person.printName();
// person.father.printName();

// let mehedi = {
//     name: 'Mehedi Hasan',
//     age: 20,
//     country: 'Bangladesh',
// };

// let mechanisum = function(obj) {
//     if(obj.age >= 18) {
//         console.log(`${obj.name} you are allow!`);
//     } else {
//         console.log(`${obj.name} you are not allow!`);
//     }
// }

// let iyadi = {
//     name: 'Iyadi Hasan',
//     age: 17,
//     country: 'Bangladesh',
// }

// let fun = function(a, b) {
//     console.log(this.name, a + b);
// }
// // fun.call(iyadi, 10, 3);
// // fun.apply(iyadi, [10, 10]);
// let bindingFun = fun.bind(iyadi);
// bindingFun(10, 2);

// let player = {
//     name: 'Mehedi Hasan',
//     age: 20,
//     introduce: function() {
//         console.log(`Hello, My name is ${this.name} and i am ${this.age} years old.`)
//     }
// }
// player.introduce();

// let person = {
//     name: "Mehedi",
//     age: 20,
//     introduce: function() {
//         console.log(`Hi, I'm ${this.name} and I am ${this.age} years old.`);
//     }
// };

// let introduceFn = person.introduce;

// introduceFn();  // ❓ What will this print?
// person.introduce();  // ❓ What will this print?

// let name = 'Mehedi Hasan';
// let age = 20;
// let person = {
//     name: name,
//     age: age,
// }
// console.log(person);

//! Higher Order function in javascript.

// function person(p1) {
//     return p1;
// }
// function printer(){
//     return 'i am from callback function';
// }
// let personOne = person(printer);
// console.log(personOne());

//? without higher order function.
// let arr = [1, 2, 3, 4, 5];
// function arrInto(array) {
//     for (var itaration = 0; itaration < array.length; itaration++) {
//             array[itaration] *= 3;
//     }
//     return array;
// }
// console.log(arrInto(arr));

//? with higher order function.
// let arr = [1, 2, 3, 4, 5];
// let resault = arr.map(function(value) {
//     return value * 2;
// });
// console.log(arr);
// console.log(resault);

//? without higer order function.
// let player = [
//   {
//     name: "Mehedi",
//     avarage: 20.5,
//   },
//   {
//     name: "Iyadi",
//     avarage: 19.3,
//   },
//   {
//     name: "Sayeedi",
//     avarage: 17.8,
//   },
//   {
//     name: "Rayhan",
//     avarage: 18.9,
//   },
// ];
// function mechanisum(array) {
//     let updatedValue = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].avarage >= 19) {
//             // array = array[i];
//             updatedValue.push(array[i]);
//         }
//     }
//     return updatedValue;
// }
// let resault = mechanisum(player);
// console.log(resault);

//? with higher order function.
// let player = [
//   {
//     name: "Mehedi",
//     avarage: 20.5,
//   },
//   {
//     name: "Iyadi",
//     avarage: 19.3,
//   },
//   {
//     name: "Sayeedi",
//     avarage: 17.8,
//   },
//   {
//     name: "Rayhan",
//     avarage: 18.9,
//   },
// ];
// let resault = player.filter((value) => value.avarage >= 19);
// console.log(resault);
// console.log(player)

// let myArray = ["Mehedi", "Iyadi", "Sayeedi"];
// // let arrMap = myArray.map((value, index, array) => {
// //   console.log(value, index, array);
// // });

// function maping(array, callbackFunc) {
//   let newArray = [];
//   let tempObj = {};
//   for (let i = 0; i < array.length; i++) {
//     // newArray.push({
//     //   value: callbackFunc(array[i]),
//     //   index: i + 1,
//     //   array: array,
//     // });
//     console.log(array[i], i, array);
//   }
//   // return newArray;
// }

// let tester = maping(myArray, function (value) {
//   return value;
// });
// console.dir(tester);

// const nums = [1, 2, 3, 4, 5];
// let mapIng = nums.map(function(value) {
//   return value * value;
// })
// console.log(mapIng);

// const nums = [1, 2, 3, 4, 5, 6];
// let filtering = nums.filter(function (value) {
//   if (value % 2 === 0) {
//     return value;
//   }
// })
// console.log(filtering);

// const nums = [1, 2, 3, 4, 5, 6, 77];

// let reduced = nums.reduce((pValue, cValue, index, array) => {
//   return pValue += cValue;
// });
// console.log(reduced);

// const words = ["apple", "banana", "kiwi", "mango", "grape"];
// let filtering = words.filter((value, index, array) => {
//   if (value.length > 4) {
//     return value;
//   }
// });
// let maping = filtering.map(function (value, index, array) { 
//   return value.toUpperCase();
// });
// console.log(maping);




