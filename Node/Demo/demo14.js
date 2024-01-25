const f1 = (x1,x2)=>{    // (11,(data,result)=>{})
    console.log("Inside f1 value of x is : "+x1)
    x2(x1+2,(x1)=>{      // (13,(15)={})
        console.log("Inside x2 :"+x1)
    })
}

f1(11,(data,result)=>{
    console.log("Inside Second : "+data)
    result(data+2);
})
