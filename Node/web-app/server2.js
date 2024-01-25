const http = require('http');


// Create a new server
const server = http.createServer((request, response)=>{
    console.log("Request come...")
    console.log("Request object : " + request)

    // Add data to response object
    response.write("First Node App")
    response.end();
})


// Server Start at this port Number
server.listen(8989);


