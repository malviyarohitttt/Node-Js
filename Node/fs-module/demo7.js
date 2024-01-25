const fs = require('fs');

fs.readFile('./xyz.txt','utf8',(err,data)=>{
    (err) ? console.log("Error Is : ",err) : console.log("Xyz Data :",data)
    response = data;
})
console.log(data)