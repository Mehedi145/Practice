//? Promise in Javascript.
// function admision(callback) {
//     console.log(`I have done admision.`);
//     callback();
// }

// function examination(callback) {
//     console.log(`I have pass the Exam.`);
//     callback();
// }

// function resault() {
//     console.log(`my resault is good.`);
// }

// function certificate() {
//     console.log(`I got the Certificte.`);
// }

// admision(function () {
//     examination(function () {
//         resault();
//     });
// });





// let status = false;
// console.log('task 1')

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         if (status) {
//             resolve('task 2');
//         } else {
//             reject('failed!');
//         }
//     }, 2000);
// });

// promise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

// console.log('task 3');





// let paymentStatus = true;
// let marks = 84;

// function enroll() {
//     console.log(`course enrollment is in progress`);
//     const promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             if (paymentStatus) {
//                 resolve();
//             } else {
//                 reject(`Payment failed`);
//             }
//         }, 2000);
//     });

//     return promise;
// }

// function progress() {
//     console.log(`Congrats! Your enrollment is succesful`);
//     console.log(`course is in progress for 3 month`);
//     let promise = new Promise(function (resolve, reject) {
//         if (marks >= 80) {
//             resolve();
//         } else {
//             reject(`You don't have enugh mark to get the Certificate.`);
//         }
//     });

//     return promise;
// }

// function certificate() {
//     console.log(`Your certificate is prepeiring`);
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve('Congrats! You got the certificate.');
//         }, 1000);
//     })

//     return promise;
// }

// enroll()
//     .then(progress)
//     .then(certificate)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })











// function checkNumbers(num) {
//     let promise = new Promise(function (resolve, reject) {
//         if (num % 2 === 0) {
//             resolve(`Even number.`);
//         } else {
//             reject(`Odd number.`);
//         }
//     });

//     return promise;
// }

// checkNumbers(1)
//     .then(function (value) { console.log(value); })








// function checkEvenOdd(num) {
//     return new Promise(function (resolve, reject) {
//         if (num % 2 === 0) {
//             resolve(`Number is even`);
//         } else {
//             reject('Number is odd');
//         }
//     });
// }

// checkEvenOdd(8881)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });







// function delayedMessage(message, time) {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(message);
//         }, time);
//     });
//     return promise;
// }

// delayedMessage('Hello ChatGpt', 2000).then(function (value) {
//     console.log(value);
// }).catch(function (error) {
//     console.log(error);
// })










// function placeOrder() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("Order placed 🛒");
//         }, 1000);
//     });
//     return promise;
// }

// function processOrder() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("Order processed ⚙️");
//         }, 2000);
//     });
//     return promise;
// }

// function deliverOrder() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("Order delivered 🚚");
//         }, 1000);
//     });
//     return promise;
// }

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
//     })









// Write a function fakeFetch(url) that returns a Promise:
// If url === "https://good.com" → resolve with "Data from good.com ✅".
// Otherwise → reject with "404 Not Found ❌".


// function fakeFetch(url, url2) {
//     return new Promise(function(resolve, reject) {
//         if (url === "https://good.com") {
//             resolve(`Data from good.com.`);
//         } else {
//             reject(`404 Not Found`);
//         }

//         if (url2 === 'https://another.com') {
//             resolve('Data from another.com.');
//         } else {
//             reject('404 Not Found')
//         }
//     });
// }

// fakeFetch('https://good.com', 'https://another.com')
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.log(error);
//     })



// function fakeFetch(url) {
//     return new Promise(function(resolve, reject) {
//         if (url === "https://good.com") {
//             resolve(`Data from good.com.`);
//         } else {
//             reject(`404 Not Found`);
//         }
//     });
// }

// function fakeFetch2(url) {
//     return new Promise(function(resolve, reject) {
//         if (url === 'https://another.com') {
//             resolve('Data from another.com');
//         } else {
//             reject('404 Not Found');
//         }
//     });
// }
// fakeFetch('https://good.com')
//     .then(value => {
//         console.log(value);
//         return fakeFetch2('https://another.com');
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(error => {
//         console.log(error);
//     })





