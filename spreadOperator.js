//similar as rest Operator
let a = (name, ...args) => {
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  console.log(`name is ${name} and`, sum);
};
a("roshan", 100, 520, 52);

//spread operator workin with array
//(...)
var arr1 = [1, 2, 5, 8, 45];
var arr2 = [];

//on function get array value as a agruments

//concat array using spread operator
var arr1 = [1, 2, 5, 8, 45];
var arr2 = [44, 558, 669, 5, 6];
var arr3 = [...arr1, ...arr2];
console.log(arr3);

///ite alos useful in object
var obj1 = {
  name: "Roshu",
};
var obj2 = {
  surname: "Markhande",
};
var obj3 = { ...obj1, ...obj2 };
console.log(obj3);
