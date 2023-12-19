
/********rest operator************
**********************************/
function sum(a,b){  
    console.log(arguments) // return a special  type like na array but not array
}
sum();

/********/
function SUM(...rest){//by using rest we get an array of arguments and perform array operation.
  return  rest.reduce((total,val)=>total = total + val,0);
}
console.log(SUM(2,3,1,8));//add any number of value as we need.



/*********/
function product(text,num, ...rest){ //text value assign in text parameter. //second parameter num = 3
    const res = rest.reduce((total,val)=>total*val);
    console.log(`${text} ${res}`); // total: 8
}

product("total:",3,4,2);


/************Spread operator************
****************************************/

const  course = [ "bangle","Eng","phy","chem"];
const result = [...course]; // make a copy of course array.
console.log(result)

result.push("biology")
console.log(result)
console.log(course)// main array doesnt change


const lang =[{
    name :"js",
    date : 1995
},
{
    name:"python",
    date: 1990
}

]

const res = [...lang] // just spread the first layer. 
console.log(lang)