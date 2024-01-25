const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    const url = request.url;
    console.log(url)

    switch(url){
        case '/' : {
            var data = fs.readFileSync("./Files/Home.html")
            break;
        }
        case '/about' : {
            var data = fs.readFileSync("./Files/About.html")
            break;
        }
        case '/contact' : {
            var data = fs.readFileSync("./Files/Contact.html")
            break;
        }
        case '/login' : {
            var data = fs.readFileSync("./Files/Login.html")
            break;
        }
        default : {
            response.write("<h1>Invalid URL...</h1>")
            break;
        }
    }
    response.write(data);
    response.end();
})

server.listen(9090,function(){
    console.log("http://localhost:9090/")
});
