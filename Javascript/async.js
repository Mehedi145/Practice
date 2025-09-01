//! Async- Wait in Javascript...

// let checker = false;
// function placeOrder() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("Order placed ");
//         }, 1000);
//     });
//     return promise;
// }

// function processOrder() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             if (checker) {
//                 resolve(`Order processed`);
//             } else {
//                 reject(`Oreder process failed!`);
//             }
//         }, 2000);
//     });
//     return promise;
// }

// function deliverOrder() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("Order delivered ");
//         }, 1000);
//     });
//     return promise;
// }

// async function foodOrder() {
//     try {
//         let one = await placeOrder();
//         console.log(one);
//         let two = await processOrder();
//         console.log(two);
//         let three = await deliverOrder();
//         console.log(three);
//     } catch (error) {
//         console.log(error);
//     }
// }
// foodOrder();

// placeOrder()
//     .then(value => {
//         console.log(value);
//         return processOrder();
//     })
//     .then(value => {
//         console.log(value);
//         return deliverOrder();
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });









// function delayedSquare(num, delay) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             if (num > 0) {
//                 resolve(num * num);
//             } else {
//                 reject(`Number not vaid`);
//             }
//         }, delay);
//     });
// }

// delayedSquare(5, 1000).then(value => {
//     console.log(value);
// }).catch(error => {
//     console.log(error);
// });


// function delayedSquare(num, delay) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             if (num) {
//                 resolve(num * num);
//             } else {
//                 reject(`Number not found`);
//             }
//         }, delay);
//     });
// }

// async function asyncFunc(num, delay) {
//     await delayedSquare(num, delay);
// }
// asyncFunc(10, 1000);












// //! ⚡ Problem: Enrollment → Exam → Result
// // Each step should be async (delayed with setTimeout).
// // Enrollment → after 1s, resolve "Enrollment done ✅"
// // Exam → after 2s, resolve "Exam finished 📝"
// // Result → after 1s, resolve "Result published 🎉"
// // You need to run them in order using async/await.
// function enrollment() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(`Enrollment done.`);
//         }, 1000);
//     });
//     return promise;
// }

// function exam() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             let pass = Math.random() > 0.5; // 50% chance
//             if (pass) {
//                 resolve("Exam finished 📝");
//             } else {
//                 reject("Exam failed ❌");
//             }
//         }, 2000);
//     });
//     return promise;
// }

// function result() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(`Result published.`);
//         }, 1000);
//     });
//     return promise;
// }

// async function asyncFun() {
//     try {
//         let enroll = await enrollment();
//         console.log(enroll);
//         let exams = await exam();
//         console.log(exams);
//         let results = await result();
//         console.log(results);
//     } catch (error) {
//         console.log(error);
//     }

// }
// asyncFun();








