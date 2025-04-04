const coding =["js","rb","py","java","cpp"]

//for each loop:callback func
coding.forEach(  function (val) {
  console.log(val);
     
})
// coding.forEach( (item)=>{
//     console.log(item);
    
// })
// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

 coding.forEach( (item,index,array)=>{
     console.log(item,index,array);
 })
 const myCoding=[
    {
    languageName:"javascript",
    languageFile:"js"
 },
 {
    languageName:"Python",
    languageFile:"py"

 },
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})