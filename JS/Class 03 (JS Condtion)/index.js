console.log("Hello I am conditional tutorial")

let age = 0;
// let grace = 2;

// age += grace;
// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age % grace)
// console.log(age ** grace)

if(age>=18){
    console.log("You can drive")
}

else if(age == 0){
    console.log("Are you kidding?")
}

else if(age == 1){
    console.log("Are you again kidding?")
}

else{
    console.log("You can not drive")
}

a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);
console.log(c)

/* 
translates to:
if(a>b){
    let c = a - b;
    console.log(c)

}
else{
    let c = b - a;
    console.log(c)
}
*/