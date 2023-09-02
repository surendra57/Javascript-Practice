// constructor function :: a special function that creates and intilizew object instance of class
// 1) normal function with this keyword and call with new keyword


function details(){

    this.name="surendra"
    this.age=24
}

const a1=new details()

details.prototype.city="jaipur"

console.log(a1.city)

console.log(a1.age)

