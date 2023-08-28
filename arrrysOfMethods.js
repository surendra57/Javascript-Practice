// Arrays methods

let firstArr= [1,5,8]

// let newArr = firstArr
// newArr.push(25)
// console.log(newArr===firstArr,firstArr)

// clone the array 
// 1) spread operators

let newArr = [...firstArr]
console.log(newArr===firstArr,firstArr)

// 2)concat method

let f1 = [1,5,8]
let f2 = [].concat(f1)

console.log(f1===f2)

// 3) Slice method

let f3= f2.slice(0)
console.log(f3===f1)

console.log([...f2,...f1,firstArr])
