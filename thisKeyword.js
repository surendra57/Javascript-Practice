// this key word
// global scope
console.log(this) // window

// In function scope

function abcd (){
    console.log(this)
}
// abcd() // window

// In method 

let obj ={
    name:"John",
    guessKaro:function(){
        console.log(this)
    }
}

obj.guessKaro()
