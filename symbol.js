//symbol is unique value
var x = Symbol("hello");
console.log(x);
console.log(typeof x);
var y = Symbol("hello");
console.log(y);
x === y ? console.log(true) : console.log(false);
//alert(x);
//symbol in object
let age = Symbol();
let std = {
  name: "roshan",
  sname: "markhande",
  [age]: 25,
};
console.log(std);

std[age] = 50;
console.log(JSON.stringify(std));
