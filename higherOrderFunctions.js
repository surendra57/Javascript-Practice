// Higher Order Functions: that accept the function as a parameter and /or return a function

function abcd(ele){
    ele()

    return function(){
        console.log("return a function")
    }

}

abcd(function(){
    console.log('callback')
})()