let a = [1, 93, 5, 6, 88]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

// let obj = {
//  0   p : 1, 
//     q : 2, 
//     r: 3
// }
// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;  
//     const element = obj[key];
//     console.log(key, element)
// }

for (const value of a) {
    console.log(value)
}