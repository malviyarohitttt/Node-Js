const fs = require('fs');
const abc = ()=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./abc.txt',(err,data)=>{
            (err) ? reject(err) : resolve(data);
        })
    })
}

const data = ()=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./data.txt',(err,data)=>{
            (err) ? reject(err) : resolve(data);
        })
    })
}
console.log("----------------------------------------------------------------")
// if all resolve 'then' execute else 'catch' excute
Promise.all([abc(),data()]).then((data)=>{
    fs.writeFile('./xyz.txt',data.toString(),(err)=>{
        (err) ? console.log("Error is " + err) : console.log("New data : " + data);
    })
}).catch((err)=>{
    console.log("Error is : "+err)
})


