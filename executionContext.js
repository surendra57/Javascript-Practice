// Execution context 
// it handles the entire transformation and execution of code

function abcd(){

    var a =10;
    function def(){
        var b = 12;

    }
    
}
function two(){
    console.log(a);
  }
  function one(){
    var a=2;
    console.log(a);
    two();
  }
  var a=1;
  console.log(a);
  one();

  