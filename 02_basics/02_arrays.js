// const marvel_heros=["thor","ironman","spiderman"]
// const dc_heros = ["superman","flash","batman"]
// dc_heros.push(marvel_heros);//pushes existing array
// console.log(dc_heros[3][2]);

// const allHeros=marvel_heros.concat(dc_heros)//concat returns new array
// console.log(marvel_heros);
// //spread:it breaks array to individual ele

// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

// //flat:splits array to subarray n concatenates to
// const arr_1=[1,2,[2,3],4,[5,6]]
// const real_arr=arr_1.flat(Infinity)
// console.log(real_arr)


console.log(Array.isArray("mr"))//to check
console.log(Array.from("mr"));//to make it arr

console.log(Array.from({age:18}));//interesting as we have to tell value /key kisse array banana hai


let score1=1
let score2=2
let score3=3
console.log(Array.of(score1,score2,score3));//returns a new array from a set of element 
np