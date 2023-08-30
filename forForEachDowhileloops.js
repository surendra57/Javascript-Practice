//loops 
//1) its used to perform repeated tasks based on a condition  
// 2) it will continue runnifg until the condition returns false.

var arr = [1,12,25,58,8,9,5,45,25,44,2,3,90]

arr.forEach(element => {
    

    // console.log(element+2)
});


// for..in loop :: its used to perform the loop in object

let obj ={
    name:"john",
    age:24,
    city:"pune"
}

for (let key in arr) {
    console.log(arr[key])
    // console.log(key+":"+obj[key])
}
