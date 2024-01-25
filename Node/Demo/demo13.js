// Callback function

const f1 = (callback)=>{
    console.log("F1 called....")
    callback(f3)  // f2(f3)
}
const f2 = (callback)=>{
    console.log("F2 called....")
    callback()   // f3()
}
const f3 = ()=>{
    console.log("F3 called....")
}

f1(f2)