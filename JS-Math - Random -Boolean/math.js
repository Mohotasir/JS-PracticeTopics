const show = function(value){
    console.log(value);
}
//Unlike other objects, the Math object has no constructor.
//The Math object is static.
//ll methods and properties can be used without creating a Math object first.

show(Math.E)
show(Math.PI)
show(Math.SQRT2)
show(Math.LOG10E)


let x = 4.24;
show(Math.ceil(x))
show(Math.round(x))
show(Math.floor(x))
show(Math.trunc(x))

//Math.sign(x) returns if x is negative, null or positive

show(Math.sign(x))
show(Math.sign(-2));
show(Math.sign(0))

//Math.pow(x,y)
show(Math.pow(3,3))   //27
show(Math.sqrt(49))   //7
show(Math.abs(-4.33)) //4.33

show(Math.min(22,12,42,11))  //11
show(Math.max(44,35,52,32))  //52

show(Math.log(1))    //0
show(Math.log2(3))   //1.58...
show(Math.log10(13)) //1.113..


/*******RANDOM*********/

show(Math.random())//show a number between 0 and 1.
show(Math.floor(Math.random()*10)) // Returns a random integer from 0 to 10:
show(Math.floor(Math.random()*100))// Returns a random integer from 0 to 100:
/************A Proper Random Function************/

function getRandomNUmber(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
show(getRandomNUmber(30,10));



/************JavaScript Booleans*****************/
show(Boolean(10>12))
show((12>11))
//Everything Without a "Value" is False
let a = 0;
show(Boolean(a))//false
let b = "";
show(Boolean(b)) //false

let c = 20 / "hello";
show(c)//NaN
show(Boolean(c))//false

// booleans can also be defined as objects with the keyword new;
let X = false;//typeof x returns boolean
let Y = new Boolean(false); //typeof y returns object
/*Do not create Boolean objects.
The new keyword complicates the code and slows down execution speed.
Boolean objects can produce unexpected results:
*/


/** for in loop************/
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  show(person[x]);
}
