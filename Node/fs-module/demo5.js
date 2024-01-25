const fs = require('fs');
const abc = ()=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./abc.txt',(err,data)=>{
            (err) ? reject(err) : resolve(data);
        })
    })
}

abc().then((data)=>{
    console.log("Data is : "+data)
}).catch((err)=>{
    console.log("Error is : "+err)
});