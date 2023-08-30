// callback function : passing a function as parameter into another function then call it 
// 2) it run after the first functionas stopped

const f1=()=>{

    console.log("callback function")
}


const f2=(ele)=>{

    console.log("parent function")
    return ele
}


f2(f1)()
