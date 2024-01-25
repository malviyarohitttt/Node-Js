const fs = require('fs');
console.log("Start...")

// If file doesn't exist then create it and then perform writeFile operation 
fs.writeFile("./abc.txt","Hello my name is Rohit Malviya",(err)=>{  // In this case first parameter is error and second is response
    (err) ? console.log("Bye..."+err) : console.log("Hi...")
});

console.log("End...")