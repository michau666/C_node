
let asyncAdd = (a, b) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject ('Args must be numbers');
            };
          }, 2000);      
    });
};


asyncAdd('-2a', 10).then((res) => {
    console.log(res);
}, (errorMessage) => {
    console.log(errorMessage);
})




// let somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hey, it worked');
//     reject('unable to fulfill promise');
//   }, 2000);  
// });


// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Ups: ', errorMessage);
// })