const fs = require('fs');
console.log("Start...")

// If file doesn't exist then create it and then perform writeFile operation 
var data = fs.readFileSync("./data.txt")
console.log("Data : "+typeof data)
console.log("Data : "+data)
console.log("Data : "+data.toString())

var data1 = fs.readFileSync("./data.txt")
console.log("Data1 : "+typeof data)
console.log("Data1 : "+data1)
console.log("Data1 : "+data1.toString())

console.log("End...")