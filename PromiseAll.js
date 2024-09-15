/*let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("First promise resolved");
    res(10);
  }, 1 * 2000);
});
let p2 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Secound promise resolved");
    rej("faised");
  }, 1 * 3000);
});
let p3 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("Third promise resolved");
    res(30);
  }, 1 * 4000);
});
var total = 0; //value will be defind datatype
Promise.all([p1, p2, p3])
  .then((result) => {
    for (var i in result) {
      total += result[i];
    }
    console.log(`results: ${result}`);
    console.log(`tatal: ${total}`);
  })
  .catch((error) => {
    console.log("Error" + error);
  }); */

//Promise function
let promiseCall = (returnData, message) => {
  return (resolve, reject) => {
    setTimeout(() => {
      console.log(`The ${message} is:`);
      resolve(returnData);
    }, returnData * 100);
  };
};

let p1 = new Promise(promiseCall(10, "First"));
let p2 = new Promise(promiseCall(20, "Second"));
let p3 = new Promise(promiseCall(30, "Third"));
//let p4=new Promise(promiseCall(40,'Fourth'));
Promise.all([[p1, p2, p3]])
  .then((result) => {
    console.log(`Result is : ${result}`);
  })
  .catch((err) => {
    console.log("Error while connecting" + err);
  });
