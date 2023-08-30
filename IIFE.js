// IIFE : Immediately invoke  function expression

// using for create private variable

let result =(function () {
    var a =10;

    return {
        getter:function(){
            console.log(a)
        },
        setter:function(val){
            a =val
        }
    }
})()
console.log(result)
result.setter(20)
console.log(result.getter())