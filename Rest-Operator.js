// //Profun
// function sum(num1,num2){ //for limited arguments
//     console.log(num1+num2)
// }
// sum(100,200);

function sumnew() { /// old method working on nuwmeric values only drawback string or multi type variable not handled
    var sm=0;
    console.log(arguments)
    for(let i in arguments) {
        sm+=arguments[i]
    }
    console.log(sm);
}
sumnew(1,2,54,552,7474,585,22,5,5,5,8,5,4,6,52,5,54,5,5,5,5,8,5456,8,8,9,9,9,9,9,9,56,25,5,5,56,5,56,5);

//rest Operator
function sumRest(name,age,...args){///////its a rest operators
    let sm=0;
    for (let i in args){
        console.log(args[i]);
        sm+=args[i]
    }
    console.log(name,age,sm)
}
sumRest('Roshan','24',1,4,5,8,5,4,5,6,58,45,54,96,63,22,54,558,4,5,55,5);
sumRest('Roshan')

function varString(...args){///////its a rest operators for string
    let sm=0;
    for (let i in args){
        
        if (args[i].includes('ro')) {
            console.log(args[i]);

        }
    }
}
varString('rosgan','monu','jfhj')