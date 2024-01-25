function show(a,b){
    // console.log("Show Called...")
    console.log("A : "+a+" B : "+b)
    var ob = function(c){
        // console.log("Hello Students....")
        console.log("A : "+a+" B : "+b+" C : "+c)
        
        var ob1 = function(d){
            // console.log("Ob1 Called...")
            console.log("A : "+a+" B : "+b+" C : "+c+" D : "+d)
        }
        return ob1;
    }
    // console.log("Bye...")
    return ob;
}
show(10,20)(30)(40);