var myGlobal=10;
//this variable is global sine it has been defined outside the scope of any function


function fun1(){
    oopsGlobal=5;  
    //check if without the name var put before oopsGlobal if it will run. 
    //Since it does not have var keyword it is said that the variable oopsGlobal will become a global variable and can be accessed outside the scope of fun1. Ken is yet to proe that.
}

function fun2(){
    var output="";
    //myGlobal has been defined since its value=10
if (typeof myGlobal != "undefined"){
    output += "MyGlobal:" + myGlobal;

}

//oopsGlobal has been defined since its value is equal to5
if (typeof oopsGlobal != "undefined"){
    output += "oopsGlobal" + oopsGlobal;
}
console.log(output)
}

fun1();
fun2();

