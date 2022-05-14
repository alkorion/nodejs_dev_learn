const name = 'John'
// name = 'Kate' // can't change a const var
console.log('Name is: ' + name)

let age = 17
// age = 'thirty' // also valid!
console.log('Age is: ' + age)

let age_over_18 = (age > 18) ? true : false

console.log('Age is over 18?: ' + age_over_18)

// Loops
let i = 0
while (i < 5) {
    console.log('i is: ' + i)
    i++
}

for (j=0; j<5; ++j) {
    console.log('j is: ' + j)
}

// Functions
function product(a, b) {
    return a * b
}
let p = product(3,4)
console.log('Product of 3 x 4 = ' + p)