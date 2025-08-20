// let person = {
//     name: 'Mehedi',
//     age: 20,
//     method: function(){
//         console.log(this);
//     },
//     innerObj: {
//         name: 'Iyadi',
//         age: 17,
//         // parentObj: this,
//         innerMethod: function() {
//             console.log(this.name);
//         }
//     }
// }

// let onething = person.method;
// // onething();
// person.innerObj.innerMethod();






// let obj = {
//     name: 'Mehedi',
//     age: 20,
//     nFun: function() {
//         let arr = () => {
//             console.log(this.name, this.age);

//         }
//         arr();
//     } 
// }

// let outerObj = {
//     name: 'Iyadi',
//     age: 17,
// }
// let funCopy = obj.nFun.call(outerObj);
// console.log(funCopy);
// // obj.nFun()










// let person = {
//     name: 'Mehedi',
//     age: 20,
//     normalFun: function () {
//         // setTimeout(() => {
//         console.log(this);
//         // }, 1000);
//     },
//     arrowFun: function () {
//         innerArrFun = () => {
//             console.log(this);
//         }
//         innerArrFun();
//     }
// }
// // person.normalFun();
// person.arrowFun();







//? Execution Context in Javascript.
// function calculatePrice(distance = 1, time = 2) {
//   return distance * time;
// }
// let resault = calculatePrice(10, 10);
// console.log(resault);





// function one(callback) {
//     console.log('I am from one');
//     callback();
// }
// function two(callback) {
//     console.log('I am frm two');
//     callback();
// }
// function three() {
//     console.log('I am from three');
// }

// function resault() {
//     one(function () {
//         two(function () {
//             three();
//         });
//     });

// }
// resault();




// function something() {
//     console.log(name);
//     innerFun();
//     var name = 'Mehedi Hasan';
//     function innerFun() {
//         console.log('i am from inner Function.');
//     }
// }
// something();






// function nothing(a, b, c) {
//     var msg = 'I am from no nothing function';
// }
// nothing(10, 20, 30);










// var x = 1;

// function outer() {
//   console.log(x); //console_1: undefine

//   var x = 2;

//   function inner() {
//     console.log(x); //console_2: 2
//     x = 3;
//   }

//   inner();
//   console.log(x); //console_3: 3
// }

// outer();
// console.log(x); //console_4: 1











