
/**+++++++++++++++++++++++++++++**/
// Falasy values in javascript : (null, undefined , NaN , '' ,0, fasle).
// Nullish  are  : (null ,  undefined)




/* In  javascript , null and  undefined are known as nullish */
const x =  null;

console.log(x ?? "not x"); /* return not x . because its check if x is nullish or not. 
if not nullish then it return left side otherwise right side */

const y = "java";
console.log(y ?? "javascript")// ans is  java;

//Its like  logical OR operation , but main difference is (OR perform on all falasy value but  ?? perform on only nullish)
const z = false;
console.log(x || "not x") // ans is (not x)
console.log(z ?? "hello") // ans is (false)
console.log(z || "hello") // ans is (hello)
console.log(z && "hello") // false
console.log(y && "hello") //hello