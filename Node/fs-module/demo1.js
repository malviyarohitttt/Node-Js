const fs = require('fs');
console.log("Start...")

// fs.writeFile("./data.txt","Hello my name is Rohit Malviya",(err)=>{  // In this case first parameter is error and second is response
//     (err) ? console.log("Bye...") : console.log("Hi...")
// });


// fs.appendFile => Append the new data after the existing data
fs.appendFile("./data.txt","Hello my name is Rohit Malviya and i am from indore",(err)=>{  // In this case first parameter is error and second is response
    (err) ? console.log("Bye...") : console.log("Hi...")
});

console.log("Ended...")