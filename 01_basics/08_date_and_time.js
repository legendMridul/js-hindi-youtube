// Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


//creqte your own date
// let myCreatedDate = new  Date(2004,11,6);
// let myDate= new Date(2004,11,6.5,30)
// console.log(myCreatedDate.toDateString());
// //yy-mm-dd
// let mydate= new Date("2025-02-27")
// console.log(myCreateddate.toLocaleString());

// //mm-dd-yy
// let myCreatedDate= new Date("27-02-2025")
// console.log(myCreateddate.toLocaleString());
//timestamp
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//Conver into sec
// console.log(Math.floor(Date.now()/1000));//to avoid decimal values we have used Math.floor
// let newDate = new Date()
// console.log(newDate.getHours());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

//format date
// `${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday: "long"
     
})
 