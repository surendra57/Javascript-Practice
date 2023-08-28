// array is like store multiple value in varible also define there indexed in  
// collection of element

let arr1 = [12,19,4,5]

// pop push unshift shift

arr1.unshift(20)
// 
  
let bigNumber = Array.isArray(arr1)=== true? console.log('true'):console.log('false')

function maxNumber(arr){

    let max = arr[0]
    let secondMax= arr[1]

    for (let i = 0; i < arr.length; i++) {
       
           if( arr[i]>max){
            secondMax=max
            max= arr[i]
        }else if( arr[i]>secondMax && arr[i] !== max){
            secondMax= arr[i]
        }
    }
    console.log(max,secondMax)
}
maxNumber(arr1)

