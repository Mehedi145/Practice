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





let paymentStatus = true;
let marks = 84;

function enroll() {
    console.log(`course enrollment is in progress`);
    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (paymentStatus) {
                resolve();
            } else {
                reject(`Payment failed`);
            }
        }, 2000);
    });

    return promise;
}

function progress() {
    console.log(`Congrats! Your enrollment is succesful`);
    console.log(`course is in progress for 3 month`);
    let promise = new Promise(function (resolve, reject) {
        if (marks >= 80) {
            resolve();
        } else {
            reject(`You don't have enugh mark to get the Certificate.`);
        }
    });

    return promise;
}

function certificate() {
    console.log(`Your certificate is prepeiring`);
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('Congrats! You got the certificate.');
        }, 1000);
    })

    return promise;
}

enroll()
    .then(progress)
    .then(certificate)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (error) {
        console.log(error);
    })