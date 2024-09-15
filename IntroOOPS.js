//help to reuse code  and orgnize,easy debug
// most use in frameworks
//class and objects

//blueprint are class
//class --poperties , method
class hello {
  message() {
    console.log("hello everyone");
  }
  sorry() {
    console.log("sorry everyone");
  }
}
let a = new hello();
a.message();
a.sorry();

//properties

//3 method
//1)constructure
//2)prototype
//3) Static
class Vallibary {
  constructor(name, age) {
    // direct set values also set multiple values
    this.name1 = name;
    this.age1 = age;
    console.log("I am connected"); //automatically called while object is created
  }
  ok() {
    console.log("My name is " + this.name1 + " age is " + this.age1);
  }
  static staticmehod() {
    console.log("i am a static mehod "); // without creating object call
  }
}
let std = new Vallibary("roshu markhande", 27);
let std1 = new Vallibary("sonu markhande", 27);
let std2 = new Vallibary("monu markhande", 27);
//std.name = "Roshu markhande"; old method
std.ok();
std1.ok();
std2.ok();
Vallibary.staticmehod();
