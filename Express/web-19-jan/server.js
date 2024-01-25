const express = require('express');
const app = express();

console.log("type of Express : "+typeof express)
console.log("Express : "+express)

console.log("type of App : "+typeof app)
console.log("App : "+app)

app.listen(9090);
console.log("Welcome to Express")