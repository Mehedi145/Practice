// function sayHello(callback) {
//     console.log('Hello Bro');
//     callback();
// }

// sayHello(function () {
//     console.log('This is the callback running.');
// });






// function calculate(a, b, callback) {
//     let resault = a + b;
//     callback(resault);
// }

// calculate(10, 3, function (value) {
//     console.log(`Result is: ${value}`);
// })





// function delayedPrint(message, delay, callback) {
//     setTimeout(() => {
//         console.log(message);
//         callback();
//     }, delay);
// }

// delayedPrint('first Message.', 2000, function () {
//     console.log(`This run after 2 seconds later.`);
// });






// //! Enrollment → prints "Enrollment done ✅"
// //! Examination → prints "Examination finished 📚"
// //! Result → prints "Result published 🎉"
// function enrollment(callback) {
//     console.log(`Enrollment done.`);
//     callback();
// }

// function examination(callback) {
//     console.log(`Examination finished`);
//     callback();
// }

// function result() {
//     console.log(`Result published`);
// }

// enrollment(function() {
//     examination(function () {
//         result();
//     })
// })





// let myArray = [1, 2, 3, 4, 5, 6, 7, 8,];

// function filterArray(arr, callback) {
//     let newArr = [];
//     for(var i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
    
// const evens = filterArray(myArray, function(num) {
//     return num % 2 === 0; 
// });

// console.log(evens);












