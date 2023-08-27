// Functions
// 1) Its a block of code that desgined to perform a particular many times.

// 2) that is defines once and excute and use it many times where we want to use.

function first(ele){
    console.log("hello bolo")
    return ele+2
}

console.log(first())

//  check even numbers 

function isEven(num){

    if(num%2 ===0){
        return true
    }else{
        return false
    }

}

console.log(isEven(10))

// input string and output first character of string

function firstChar(str){

    // return str[0]
    return str[str.length-1]

}
console.log(firstChar('Surendra'))


