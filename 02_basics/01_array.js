// array:collection of multiple items under a single var
const myArr =[1,2,34,5]
// const myHeros=["heyman"]
// const myArr2=new Array(1,2,3)
//can't be accessed by arbitary strings
// console.log(myArr[2]);
//it makes shalow copies(shares the same reff point)

//Array methods
// myArr.push(55)//adds value to array
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
// myArr.unshift(6)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(7));
// console.log(myArr.indexOf(5));
// console.log(myArr);
// const newArr=myArr.join()//join changes the type to string
// console.log(myArr);
// console.log(newArr);

//slice,spice
console.log("a", myArr);

const myArr1 = myArr.slice(1,3)
console.log(myArr1);
console.log("b" , myArr);
const myArr3= myArr.splice(1,3)
console.log("c",myArr3);
console.log(myArr3);

