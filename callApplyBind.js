// call apply bind 

// Motive : if we have function and object and infucntion by default this keyword's value window ki jagah 
// point out to object 

// call()
function abcd (val){
    console.log(this,val)
}

let obj = {
    age:24
}
// abcd.call(obj,1)

// apply() : parameter array me pass krna pdata h
// abcd.apply(obj,[1])

// bind (): its return function()

var a1 =abcd.bind(obj)