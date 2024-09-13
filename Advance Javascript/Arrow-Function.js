//old style
function getVal() {
        console.log('old style function');
}
getVal();

let a=function(){
    console.log('again old style function');
}
a();

//new style
let b=()=>{
    console.log('new function style \n Arrow Fucntion\n Now using parameter');
}
b();
let c=(state)=>{
    console.log('new function style using parameter',state);
}
c('name');
let d=(state,age)=>{
    console.log('new function style using parameter',state,'age is ',age);
}
d('Roshan',25);