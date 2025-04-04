// for of
// for (const element of object) {
    // object = kis cheez pe loo lagana hai
// }

// const arr =[2,4,6,8]
// for (const num of arr){
    // console.log(arr);
    
// }
const greetings = "hello world"
for(const greet of greetings){
    // console.log('each char is ${greet}')
    
}
//Maps:object hai , hold krta hai key value pair
//maps jis value mein data lengi usi mein rehegi aur unique value legi humesha
const  map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")
// console.log(map);

//applying loop on map
for (const [key,value ]of map) {// it destructs the value
    // console.log(key);
    
}
//applying loop on obj
const myObject={
    'game1':'NFS',
    'Game2':'Spiderman'
}
for (const [key,value] of myObject) {
   console.log(key,':-',value);
    
}