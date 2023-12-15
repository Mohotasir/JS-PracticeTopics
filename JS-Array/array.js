
const show = function(value){
    console.log(value);
}
// declare an array//
const lang = ["java","c","c++","javascript","PHP"];
//another way of declaration//
const course= new Array("bangla","english","math","physics");

show(typeof(lang)); //return (object).
show(course);


/**********************/
// Arrays are special kinds of objects.
//It contains  variables of different types in the same Array.

const arry=[];
arry[0] = Date.now();
arry[1] = function(){show("2nd element")}
show(arry);
/*********************/


course.push("chemistry");
course[course.length] = "biology";
//course[9] = "hello"; // creates undifined holes
show(course);


/*************/
let x;
const arr = new Array(20);// here create an array with 20 undefined element ...(length =20)
const arr1  = [20]; // here, create an array with one element...(length = 1) 
 show(arr);
 show(arr1);
 //to check if the variable is array or not....
 show(Array.isArray(arr)); //retrun true
 show(arr instanceof Array);


/**********ARRAY METHODS*******
 ******************************
-> arr.length
-> arr.toString()
-> arr.join()
-> arr.push() , arr.pop() , arr.shift() , arr.unshift()
-> ar.concat() , arr.slice() , arr.splice() , arr.delete()

*/
show(course.join(" + "));
show(course.pop()); //return the popped value
show(course.push("socioloy")); //return the new array length
show(course.shift()); // removed first element and return this element
show(course.unshift("histry"));//insert begin
show(course);
show(course.concat(lang));//add two array
course.splice(1,0,"HigherMath")//1 denotes where new element should be adde and 0 denotes how many element should be removed
show(course)
course.splice(0,1)//delete first five elements
show(course)
const newCourse = course.slice(3,5);
show(newCourse)
course.reverse()//reverse an array
show(course);

/**********Array Sorting ***********
 ***********************************

sort() function sort values as a string
In case of number type arrary this function gives wrong  answer

The compare function compares all the values in the array, two values at a time (a, b).
When comparing 40 and 100, the sort() method calls the compare function(40, 100).
The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
You can use this code snippet to experiment with numerically and alphabetically sorting:
*****/
const mark = [12,45,2,47,23,42]
mark.sort((a,b)=>{return a-b}); // sort ascending order
show(mark);

/*Fisher Yates Method(random sorting) */
for(let i =mark.length-1;i>0 ;i--){
    let j = Math.floor(Math.random()*(i+1));
    let k = mark[i];
    mark[i] = mark[j];
    mark[j] = k;
}
show(mark);
/********Sorting Object Arrays***********/
const people = [
    {type:"sakib", year:2016},
    {type:"tamim", year:2001},
    {type:"abir", year:2010}
  ];
 people.sort((a,b)=>{a.year-b.year});



/************Array Iteration***********
***************************************/

//forEach()............
const age =[12,32,53,23,14];
let sum = 0;
age.forEach((value,index,array)=>{
    show(value);
    sum += value;
})
show("sum = "+sum);

// map()............. -> The map() method creates a new array by performing a function on each array element.
show(age.map(function(value){
   return value*2;
}));

//filter()...............
show(age.filter((value)=>{
    return value > 20;
}))

//every()............
show(age.every((value)=>{
    return value > 20;
}))

//indexOf()............
show(course)
show(course.indexOf("physics")+1);

//lastIndexOf()............(if same element in many times then denotes the last element)
show(course.lastIndexOf("english")+1);

//find()...............(returns the value of the first array element)
show(age.find((value)=>{
    return value > 20;
}));

//keys()..................
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for (let x of keys) {
  show(x);
}

//entries()...............(The entries() method returns an Array Iterator object with key/value pairs)
const f = fruits.entries();
for(let x of f){
    show(x);
}
//spread().............
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

