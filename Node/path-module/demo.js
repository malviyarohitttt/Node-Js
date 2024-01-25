const path = require('path');
// console.log(typeof path)
// console.log(path)

const mypath = "abcd/xyz/hello.html";
console.log("----------------------------------------------------------------")
console.log(path.extname(mypath))
console.log(path.basename(mypath))
console.log(path.dirname(mypath))
