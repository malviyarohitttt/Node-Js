const f1 = ()=>{
    console.log("F1 Called....")
}
const f2 = ()=>{
    console.log("F2 Called....")
}
const f3 = ()=>{
    console.log("F3 Called....")
}

console.log("----------------------------------------------------------------")
f1();
f2();
f3();
console.log("----------------------------------------------------------------")

// setInterval(f1,4000);   Execute F1 function after every 4 seconds
setTimeout(f1,2000);    // Execute F1 function after 2 seconds (Only Once)
f2();
f3();

