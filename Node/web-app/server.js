const http = require('http');


// Create a new server
const server = http.createServer(function(request, response){
    console.log("Request come...")
    console.log("Request object : " + request)
})


// Server Start at this port Number
server.listen(8989);

// server.listen() => 1).listen method is used to strat the server
//                    2).this method is used pre-defined present in inside the http Server

// Note : Jaise hi client se request aayegi callback function executed hoga 