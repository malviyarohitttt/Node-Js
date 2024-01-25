const http = require('http');

const server = http.createServer((request, response)=>{
    console.log("Request come")
    response.write("<h1>Node Page</h1>")
    response.write("<u>My name is Rohit</u></br>")
    response.write("<mark>My name is Rohit</mark></br>")
    response.write("<input type='text'>")
    response.end();
})

server.listen(8989);


