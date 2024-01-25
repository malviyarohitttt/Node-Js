const http = require('http');

const server = http.createServer((request, response)=>{
    const url = request.url;
    console.log(url)

    switch(url){
        case '/' : {
            response.write("<h1>Home Page Called...</h1>")
            break;
        }
        case '/about' : {
            response.write("<h1>About Page Called...</h1>")
            break;
        }
        case '/contact' : {
            response.write("<h1>Contact Page Called...</h1>")
            break;
        }
        case '/login' : {
            response.write("<h1>Login Page Called...</h1>")
            break;
        }
        case '/register' : {
            response.write("<h1>Register Page Called...</h1>")
            break;
        }
        default : {
            response.write("<h1>Invalid URL...</h1>")
            break;
        }
    }
    response.end();
    
})

server.listen(9090,function(){
    console.log("http://localhost:9090/")
});


