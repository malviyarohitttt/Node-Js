function fun1(){
    var a = 12;
    let b = 22;
    console.log("A : ",a,", B : ",b);

    if(a>10){
        var a = 55;
        let b = 45;
        console.log("inside if block A : ",a,", B : ",b);
    }
    console.log("outside if block A : ",a,", B : ",b);
    console.log("Ending.....")

}
fun1();