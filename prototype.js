// [[prototype]]: its a internal property of an object

// whenever we create a object then js provide us prototype properties to help like access the object find 
// key value avaialable or not

let obj ={
    name:"john"
}

let a=  obj.hasOwnProperty('name')//true

// prototypal inheritance 

// passing the parents properties to childern with help of proto 
//  a fucntion use like or treat like object 

function hello(){
    console.log("hello")
}

console.log(hello.prototype)
hello.prototype.name="Warrior"
hello.prototype.personality="Never defeated"
hello.prototype.about=()=>{
    console.log("very disipline")
}

hello.prototype.about()
hello.__proto=obj