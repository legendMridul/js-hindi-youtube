//Primitive:string,number,boolean,null,undefined,symbol,BigInt
// const score = 100
// const scoreValue=100.3
// const isLoggedIn=false
// const outsideTemp = null
// let userEmail;//undefined
// const id=Symbol('123')
// const anotherId=Symbol('123')

// // console.log(id===anotherId);
//  const bigNumber=33333333333333n



// //Non Primitive/Reference:Array,objects,functions
// // objects are placed in curly braces
// const heros =["Shaktiman","naagraj","doga"];
// let myObj = {
//     name :"hitesh",
//     age :22,
// }

// const myFunction=function(){
// console.log("Hello World")

// }
// console.log(typeof bigNumber);
// console.log(typeof outsideTemp );
// console.log(typeof scoreValue);
// console.log(typeof myFunction );

//+++++++++++++++++++++++++++++++++++++++++
//stack(primitive),heap(non primitive)
//stack memory gives copy of var
// heap gives reference of original value
//refrence means chnages wil be made in original value
let name1="Mridul"
let anotherName="mishraji"
console.log(name1);

console.log(anotherName);

//object
let userInfo = {
email:"michaelmishra@hotmail.com",
upi:"michael@ptaxis"
}
let user2= userInfo
user2.email="mishrajee@gmail.com"

console.log(userInfo.email);
console.log(user2.email);

