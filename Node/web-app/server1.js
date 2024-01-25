const http = require('http');


// Create a new server
const server = http.createServer(function(request,response){
    console.log("Request come...")
    console.log("Request object : " + request)

    // Add data to response object
    response.write("First Node App")
    response.end();
})


// Server Start at this port Number
server.listen(8989);


// response.write() => It is used to print output or any message on browser screen 
//                     it is predefined method Present in response object 