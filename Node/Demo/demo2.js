num = 45;

function fun1(){
    var num1 = 55;
    let num2 = 65;
    num3 = 75;  // global variable, we can use it anywhere

    if(true){
        num5 = 85;
    }

    console.log("In Fun 1 Num is : "+num);  // 45
    console.log("In Fun 1 Num1 is : "+num1); // 55
    console.log("In Fun 1 Num2 is : "+num2); // 65
    console.log("In Fun 1 Num3 is : "+num3); // 75
    console.log("In Fun 1 Num5 is : "+num5); // 85
}

function fun2(){
    console.log("In Fun2 Num is : "+num);  // 45
    console.log("In Fun2 Num3 is : "+num3); // 75
    console.log("In Fun2 Num5 is : "+num5); // 85

    // console.log("Num1 is : "+num1);  // error num1 is undefined
    // console.log("Num2 is : "+num2);
}

fun1();
fun2();