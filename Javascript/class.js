// class Car{
//     constructor(brand, color, model) {
//         this.brand = brand;
//         this.color = color;
//         this.model = model;
//     }
//     start() {
//         console.log('Car has been Start.');
//     }
// }

// let bmwCar = new Car('BMW', 'white', 'X1');
// console.log(bmwCar);






// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat(food) {
//         console.log(`${this.name} is Eating ${food ? food : 'please call a food Name'}.`)
//     }
// }

// class Footballer extends Person{
//     constructor(name, age, position, country) {
//         super(name, age);
//         this.position = position;
//         this.country = country; 
//     }
//     play() {
//         console.log(`${this.name} is playing football on the ground.`);
//     }
// }

// let mehedi = new Person('Mehedi Hasan', 20);
// let iyadi = new Footballer('Iyadi Hasan', 17, 'Striker', 'Bangladesh');

// console.log(mehedi);
// console.log(iyadi);







// class Vehicle{
//     constructor(name){ 
//         this.name = name;
//     }
//     start() {
//         console.log(`${this.name} is Started!`)
//     }
// }

// class Car extends Vehicle{
//     constructor(name, brand) {
//         super(name);
//         this.brand = brand;
//     }
//     driving() {
//         console.log(`${this.brand} is Driving.`);
//     }
// }

// let marcedes = new Car('Marcedes', 'Marcedes Benz');
// console.log(marcedes);






// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     makesound() {
//         console.log(`${this.name} make a sound.`)
//     }
// }

// class Mammal extends Animal{
//     constructor(name, hasFur) {
//         super(name);
//         this.hasFur = hasFur;
//     }
// }

// class Dog extends Mammal{
//     constructor(name, hasFur) {
//         super(name, hasFur);
//     }
//     bark() {
//         console.log(`${this.name} says Woof!`);
//     }
// }

// let shark = new Dog('Shark', true);
// console.log(shark);
// shark.makesound();
// shark.bark();






// class Person{
//     constructor(name, age, weight) {
//         this.name = name;
//         this.age = age;
//         this.weight = weight;
//     }
//     sleep() {
//         console.log(`${this.name} is Sleeping at whole night.`)
//     }
// }

// class Electrician extends Person{
//     constructor(name, age, weight, type, rank){
//         super(name, age, weight);
//         this.type = type;
//         this.rank = rank;
//     }
//     status() {
//         console.log(`${this.name} is a Proffetional Electrician`);
//     }
// }

// class Electrician2 extends Electrician{
//     constructor(name, age, weight, type, rank, country) {
//         super(name, age, weight, type, rank);
//         this.country = country;
//     }
    
//     info() {
//         console.log(`${this.name} is from ${this.country}`);
//     }
// }

// let sayeedi = new Person('Sayeedi Hasan', 2, '15KG');
// let iyadi = new Electrician2('Iyadi Hasan', 17, '50KG', 'Car Wireing', 'mid', 'Bangladesh');
// let mehedi = new Electrician('Mehedi Hasan', 20, '48KG', 'House Wireing', 'Top');
// console.log(mehedi);
// console.log(iyadi);
// console.log(sayeedi);
// mehedi.sleep();
// iyadi.sleep();
// sayeedi.sleep();








// class Person{
//     constructor(name) {
//         this.name = name;
//     }
//     sleep() {
//         console.log(`${this.name} is Sleeping.`);
//     }
// }

// class Men extends Person{
//     constructor(name) {
//         super(name);
//     }
//     sleep(sleepingTime){
//         console.log(`${this.name} is sleeping about ${sleepingTime} Hour.`);
//         super.sleep(10);
//     }
// }
// let mehedi = new Men('Mehedi Hasan');
// console.log(mehedi);
// mehedi.sleep(20);   





// class Book{
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getSummary() {
//         return `${this.title} by ${this.author}, Publishs in ${this.year}.`;
//     }
// }

// let automicHabit = new Book('Automic Habit', 'Mehedi Hasan', '2024');
// let resault = automicHabit.getSummary();
// console.log(resault);










// class Calculator{
//     static multiply(a, b) {
//         return a * b;
//     }
// }
// console.log(Calculator.multiply(10, 2));



// class Shape{
//     draw() {
//         console.log('Drawing a Shape');
//     }
// }

// class Rectangle extends Shape{
//     draw() {
//         console.log('Drawing a Rectangle');
//     }
// }
// let rect = new Rectangle();
// console.log(rect.draw());






// class Person {
//     constructor(name) {
//         this._name = name; // _name is our "real" property
//     }
//     // Getter
//     get name() {
//         return this._name.toUpperCase();
//     }
//     // Setter
//     set name(newName) {
//         this._name = newName.trim();
//     }
// }

// let p = new Person("Mehedi");
// console.log(p.name);   // MEHEDI (getter is called automatically)

// p.name = "   Hasan  "; // setter is called automatically
// console.log(p.name);   // HASAN








// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     get getName() {
//         console.log(`my name is ${this.name} and i am ${this.age} years old.`)
//     }
//     set newName(name) {
//         let changer = this.name = name;
//         console.log(changer);
//     }
// }
// let mehedi = new Person('Mehedi Hasan', 20);
// // mehedi.getName;
// mehedi.newName = 'Iyadi Hasan';









// class Mathes{

//     static addition(a, b){
//         return a + b;
//     }
// }
// let one = new Mathes();
// console.log(Mathes.addition(10, 20));
// console.log(one.addition(20, 20));






// class BankAccount {
//     constructor(owner, balance) {
//         this.owner = owner;
//         this.balance = balance;
//     } 
//     deposit(amount) {
//         this.balance += amount;
//     }
//     withdraw(amount) {
//         if(amount <= this.balance) {
//             this.balance -= amount;
//         } else {
//             console.log('Insufficient funds!');
//         }
//     }
//     get currentBalance() {
//         return this.balance;
//     }
// }
// let account = new BankAccount('Mehedi Hasan', 10000);
// account.deposit(20000);
// console.log(account.currentBalance);









// class Vhicale{
//     constructor(name) {
//         this.name = name;
//     }
//     move() {
//          console.log('Vhicle is moveing.');
//     }

// }

// class Car extends Vhicale{
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         console.log(`Car ${this.name} is driveing`);
//     }
//     honk() {
//         console.log('Beep beep!')
//     }
// }

// let toyota = new Car('Toyota');
// toyota.move();
// toyota.honk();





// class Player {
//     constructor(name, score) {
//         this.name = name;
//         this.score = score;
//     }
//     incrementScore() {
//         this.score += 1; // increase score by 1
//         console.log(`Player ${this.name} score: ${this.score}`);
//     }
// }

// let player1 = new Player('Mehedi', 0);
// let player2 = new Player('Iyadi', 0);

// player1.incrementScore(); // Player Mehedi score: 1
// player2.incrementScore(); // Player Iyadi score: 1








// class Car{
//     constructor(brand, speed) {
//         this.brand = brand;
//         this.speed = speed;
//     }
//     accelerate() {
//         this.speed += 10;
//         console.log(`Brand ${this.brand} speed: ${this.speed} km/h`);
//     }
//     accelerateLater() {
//         setTimeout(() => {
//             this.accelerate();
//         }, 1000);
//     }
// }
// let toyota = new Car('Toyota', 0);
// toyota.accelerateLater();








class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds!");
        }
    }
    showBalance() {
        console.log(`Hello. ${this.owner} your balance is ${this.balance}`);
    }
}
let account1 = new BankAccount('Mehedi Hasan', 20000);
account1.deposit(20000);
account1.withdraw(10000);
account1.showBalance();