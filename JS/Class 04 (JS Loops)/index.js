console.log("I am tutuorial on Loops")

let a = 1;
// console.log(a)
// console.log(a + 1)
// console.log(a + 2)

for (let i = 0; i < 100; i++) {
    console.log(a + i)
}

let obj = {
    name : "Harry",
    role : "Programmer",
    company : "CodeWithHarry AI"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

for (const c of "Harry") { 
    console.log(c)
}

let j = 1;
while (j<6) {
    console.log(j)
    j++;
}

let k = 10;
do {
    console.log(k)
    k++;
} while (k<3);