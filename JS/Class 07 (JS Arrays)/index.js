let arr = [1, 2, 4, 5, 7]
// index  0, 1, 2, 3, 4

arr[0] = 5666;
console.log(arr, typeof arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))

let a = [1, 2, 3, 4, 5, 6]
console.log(a)
console.log(a.pop())
console.log(a)

console.log(a.push(100))    //length
console.log(a)

a.shift()   //reverse pop
console.log(a)  
a.unshift("Jack")   //reverse push
console.log(a)

delete a[5]
console.log(a)
console.log(a.length)
console.log(a[5])

let p = [1, 2, 3]
let q = [4, 5, 6]
let r = [7, 9, 8]
console.log(p.concat(q, r))
console.log(r.sort())

let num = [1, 2, 3, 4, 5]
console.log(num)
console.log(num.splice(1, 3, 222, 333))
console.log(num)

let n = [ 1, 2, 3, 4, 5]
console.log(n.slice(1))