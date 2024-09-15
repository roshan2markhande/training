//mthod 1
async function test() {
  return "Roshu";
}

//console.log(test());
test().then((result) => {
  console.log(result);
});

//method 2
let ok = async function () {};
//mehtid 3
let okk = async () => {};
//working with await

async function prom() {
  //check sequence for printed data
  console.log("2 : Message");
  const std = await fetch("https://jsonplaceholder.typicode.com/posts");
  const l_str = await std.json();
  console.log("3 : Message");
  console.log("4 : Message");
  return l_str;
}
console.log("1 : Message");
prom()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//---------------------------------------
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     for (let i in data) {
//       console.log(data[i].title);
//       document.write(`${data[i].title} <br>`);
//     }
//   });
//--------------------------------------------------------
async function prom1() {
  return (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
}
