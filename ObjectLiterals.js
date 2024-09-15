//old method
let name = "Roshan";
let surname = "Markhande";
let obj1 = {
  name: name,
  surname: surname,
};
console.log(obj1);

//new method
let obj2 = {
  name,
  surname,
};
console.log(obj2);
//2)
let n = "name";
var obj3 = {
  [n]: "roshu", ///prepertire use kr sate h
  ourse: "betch",
};
console.log(obj3);

let n1 = "student";
var obj4 = {
  [n1 + "name"]: "roshu", ///prepertire use kr sate h
  ourse: "betch",
  details: function () {
    return `${this.studentname} is and cource ${this.ourse}`;
  },
};
console.log(obj4);
console.log(obj4.details());
//u can also use as function

//3)
//old method
let obj5 = {
  name: "monu",
  show: function () {
    return console.log(this.name);
  },
};
obj5.show();
//new method
let obj6 = {
  name: "monu",
  show() {
    ///no need to declare
    return console.log(this.name);
  },
};
obj6.show();

//5)
let l_name = "Roshu papa";
let l_course = "BCA";

function student(name, course) {
  return { name, course };
}
console.log(student(l_name, l_course));

//ypu can also manipulate the string and concat it  function that retuen object
