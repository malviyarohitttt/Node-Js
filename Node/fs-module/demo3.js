const fs = require('fs');
console.log("Start...")

// If file doesn't exist then create it and then perform writeFile operation 
fs.readFile("./data.txt",'utf8',(err,data)=>{  // In this case first parameter is error and second is response
    (err) ? console.log("Error Is : "+err) : console.log("Data is : "+data)
});

fs.readFile("./abc.txt",'utf8',(err,data)=>{  // In this case first parameter is error and second is response
    (err) ? console.log("Error Is : "+err) : console.log("Data is : "+data)
});

fs.readFile("./xyz.txt",'utf8',(err,data)=>{  // In this case first parameter is error and second is response
    (err) ? console.log("Error Is : "+err) : console.log("Data is : "+data)
});

console.log("End...")