//Assign array values to variables;
//old method
var user = ["hemant", "roshu", "abhijeet", 25];
let fname = user[0];
let fname1 = user[1];
let fname2 = user[2];
let l_age = user[3];

//new method
var [name, name1, name2, age] = user; //alse check default value
console.log(name);
//also work in nester array
var user = ["hemant", "roshu", "abhijeet", 25, ["male", "female"]];
var [name, name1, name2, age, [gender, f_gender]] = user; //alse check default value

//you can also use rest operators
var user = ["hemant", "roshu", "abhijeet", 25];
var [name, name1, ...args] = user; //alse check default value
console.log(args);

//using function
// var user = ["hemant", "roshu", "abhijeet", 25];
// function user([name, name1, name2, age]) {}

//function return array
function getval() {
  return ["roshu", "BCA", "4 thsem"];
}
let [nam4, course4, sem] = getval();
