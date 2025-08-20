//? Create a constructor function Animal with a type property and a sound() method on its prototype that logs "The [type] makes a sound".
//? Then create two animals: "dog" and "cat" and call their sound() method
//! solveing...
// function Animal(type) {
//     this.type = type;

// }
// Animal.prototype.sound = function() {
//     // console.log(`the ${this.type} makes a sound`);
//     return `the ${this.type} makes a sound`;
// }

// let dog = new Animal('dog');
// let cat = new Animal('cat');
// console.log(dog.sound());
// console.log(cat.sound());
//! problem 1 solved...



//? Make a constructor function Car with a brand property.
//? Add a method drive() to its prototype that logs "Driving a [brand]".
//? Check if car1.__proto__ === Car.prototype returns true.
//! solveing...
// function Car(brand) {
//     this.brand = brand;
// }

// Car.prototype.drive = function () {
//     console.log(`Driving a ${this.brand}`);
// };

// const car1 = new Car("Toyota");
// const car2 = new Car("Honda");

// console.log(car1.__proto__ === Car.prototype); // true
// console.log(car2.__proto__ === Car.prototype); // true
// console.log(car1.__proto__ === car2.__proto__); // true











// console.log(a);  // 1: ReferenceError:.
// console.log(foo()); // 2: ReferenceError:.

// let a = 10;

// function foo() {
//   return a;
// }

// const bar = function() {
//   let a = 20;
//   return function inner() {
//     console.log(a); // 3: 20
//     a = 30;
//   }
// }

// const fn = bar();
// fn();
// console.log(a); // 4: 30








// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 15 },
//   { name: "David", age: 19 },
//   { name: 'Mehedi', age: 20},
// ];
// let filtering = users.filter((value, index, array) => {
//   if (value.age >= 18) {
//     return value;
//   }
// });
// console.log(filtering);








// const users = [
//   { name: "Alice", age: 17 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 15 },
//   { name: "David", age: 19 },
//   { name: "Mehedi", age: 20 },
// ];
// let myMap = users.map((value, index, array) => {
//   return value.name;
// });
// console.log(myMap);








const cart = [
  { item: "Phone", price: 500 },
  { item: "Headphones", price: 100 },
  { item: "Charger", price: 50 }
];

function cartPriceSum (array) {
  let sumer = 0;
  for (let i = 0; i < array.length; i++) {
    sumer += array[i].price;
  }
  return sumer;
}
let resault = cartPriceSum(cart);
console.log(resault);