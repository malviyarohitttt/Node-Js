function show(){
    console.log("Show Called...")
    var ob = function(){
        console.log("Hello Students....")
    }
    console.log("Bye...")
    return ob;
}
// var obj = show();
// console.log(obj)

// obj();
show()();