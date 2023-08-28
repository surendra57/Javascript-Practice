// var let const

// 1) var keyword is from ES5 and let, const are from ES6 version for JS
//  2) var is function scoppes and let and const are braces scoped

function abcd(){

    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log(i)

}
abcd()

//3) var adds itself to the window object and let & const doesnot adds

var a= 10

var b = 12

