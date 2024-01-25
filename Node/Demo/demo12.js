console.log("-----At the start-----")
const f1 = ()=>{
    console.log("F1 Called....")
}
const f2 = ()=>{
    console.log("F2 Called....")
}
const f3 = ()=>{
    console.log("F3 Called....")
}

setTimeout(f1,1000);
setTimeout(f2,500);
setTimeout(f3,2000);

