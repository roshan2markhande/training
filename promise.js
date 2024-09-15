// function prom(complete) {
//   //create promise
//   return new Promise(function (resolve, reject) {
//     console.log("pending state");
//     setTimeout(() => {
//       if (complete) {
//         resolve("i am sucessful");
//       } else {
//         reject("i am failed");
//       }
//     }, 3000);
//   });
// }

// // let onfulfill = (result) => {
// //   console.log(result);
// // };
// // let onfailed = (err) => {
// //   console.log(err);
// // };
// prom(true)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   }); // for calling function
//2)e.g
function prom(a, b) {
  return new Promise(function (res, rej) {
    console.log(`Fetching Data Please wait!`);
    var c = a - b;
    setTimeout(() => {
      if (c > 0) {
        res(`Positive value is ${c}`);
      } else {
        rej(`Negetive value is ${c}`);
      }
    }, 1000);
  });
}
prom(4, 8)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
