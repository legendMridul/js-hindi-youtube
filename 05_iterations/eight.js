//reduce is used in shopping card
const nums=[1,2,3]
// const myTotal = nums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc + currval
// },5)
// console.log(myTotal);

const myTotal = myNumbers.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart=[
{
    itemName:"jd course",
    price:2999
},
{
    itemName:"pycourse",
    price:999
},
    {
    itemName:"mobile dev course",
    price:5999
},
    {
    itemName:"datas science course",
    price:12999
    },
    
]
const shoppingValue=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(shoppingValue);
