//inheritance use properties of 1 class to another calss
//types
//1)single level base class to derived class
//2)multi level base to drived and derived to another derived
//keyword extends
class employee {
  constructor(name) {
    this.emp_name = name;
    console.log("constursture employee" + name);
  }

  message() {
    console.log("emp name " + this.emp_name);
  }
}
class manager extends employee {
  //   constructor(name) {
  //     //super function check constructure
  //     super();
  //     console.log("constursture manager" + name);
  //   }
  info() {
    console.log("hi");
    super.message(); //for calling
  }
}
class test extends manager {} //multilevel
let emp = new employee();
let mgr = new manager(" roshu");
mgr.message("monu");
mgr.info();
let t = new test("test");
