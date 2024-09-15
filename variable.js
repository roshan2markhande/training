//js has 3 declaretion type
var x=10; //var has re declarion global scope and reassign
var x=20;
x="name";
console.log(x);

//
let a=10;
 a=20; //Identifier 'a' has already been declared  block scope
console.log(a);

const b=3.14;
b=3.15; //: Assignment to constant variable. block scope not re assign
console.log(b); 