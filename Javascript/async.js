// let name = 'Mehedi Hasan';



// function fetchUser(callback) {
//   setTimeout(() => {
//     callback("Bro, here’s your user data");
//   }, 2000);
// }

// fetchUser((data) => {
//   console.log(data);
// });
// console.log('I am from last');



// function slowTask() {
//   let start = Date.now();
//   while (Date.now() - start < 3000) {
//     // blocking for 5 sec ⏳
//   }
//   console.log("Task done");
// }

// console.log("Start");
// slowTask(); // blocks everything
// console.log("End");
// console.log('I am not from Banagladesh');




// function worker() {
//   console.log('I am from first line in function');
//   setTimeout(() => {
//     console.log('I am from settime function');
//   }, 3000);
//   console.log('I am from last line in function');
// }

// console.log('I am from one in Global');
// worker();
// console.log('I am from two in Global');









//? Functions creation..
// let takeOrder = (customar, callback) => {
//     console.log(`Take order for ${customar}`);
//     callback(customar);
// }

// let processOrder = (customar, callback) => {
//     console.log(`Processing order for ${customar}`);
//     setTimeout(() => {
//         console.log(`Cooking complete`);
//         console.log(`order processed for ${customar}`);
//         callback(customar);
//     }, 3000);
// }

// let orderComplete = (customar) => {
//     console.log(`order complete for ${customar}`);
// }

// //? Functions Invokes..
// takeOrder('Mehedi Hasan', (customar) => {
//     processOrder(customar, (customar) => {
//         orderComplete(customar);
//     });
// });











// let paymentStatus = true;
// function enrollment(callback) {
//     console.log(`Your enrollment is in prograce.`);
//     if (paymentStatus) {
//         console.log(`Congratulation! Your enrollment is Done.`);
//         // callback();
//     } else {
//         console.log(`Payment failed!`);
//     }
// }

// let exam = 'pass';
// function examination(subName, callback) {
//     if (exam === 'pass') {
//         console.log(`Congratulation! You have been pass the ${subName} exam!`);
//         callback();
//     } else {
//         console.log(`Sorry! You have failed the exam`);
//     }
// }

// function getCertificate() {
//     console.log(`You have got the certificate.`);
// }

// // enrollment(function (){
// //     examination('Math');
// // });
// enrollment(examination('Math', getCertificate));




// let paymentStatus = true;
// let marks = 79;

// function enroll(callback) {
//     console.log(`enrollment is in progress`);
//     setTimeout(() => {
//         if (paymentStatus) {
//             console.log(`Congratulation! Enrollment is done`);
//             callback();
//         } else {
//             console.log(`Payment failed`);
//         }
//     }, 2000);
// }

// function courseProgress(callback) {
//     console.log(`Courees is in progress for 3 month.`);
//     setTimeout(() => {
//         if (marks >= 80) {
//             callback();
//         } else {
//             console.log(`You don't have enugh mark to get the Certificate.`);
//         }
//     }, 2000);
// }

// function certificate() {
//     console.log(`Your certificate is prepeairing...`);
//     setTimeout(() => {
//         console.log(`Congratulation! You got the certiificate.  Your marks is ${marks}.`);
//     }, 1000);
// }
// enroll(() => {
//     courseProgress(() => {
//         certificate();
//     });
// });















