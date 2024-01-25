// variable scope

num = 50;
console.log("Value num : "+num);

function show(){
    console.log(num);

    var a = 100;
    let b = 200;
    console.log("Value a : " + a);
    console.log("Value b : " + b);
    
    if(true){
        var x = 10;    // can access outside if statement
        let y = 20;    // can not access outside if statement
        console.log("inside if block Value x : " +x);
        console.log("inside if block Value y : " +y);
    }
        console.log("outside if block Value x : " +x)
       // console.log("Value y : " +y)  // y is not defined 

}
show();
console.log("Value num : " +num)