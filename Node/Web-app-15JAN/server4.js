const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    const url = request.url;
    switch(url){
        case '/' : {
            fs.readFile("./Files/Home.html",'utf8',(err,data)=>{
                if (err) {
                    console.log("Error Is : "+err)
                } else {
                    response.write(data);
                    response.end();
                    // console.log(data)
                }
            })
            break;
        }
        case '/about' : {
            fs.readFile("./Files/About.html",'utf8',(err,data)=>{
                if (err) {
                    console.log("Error Is : "+err)
                } else {
                    response.write(data);
                    response.end();
                    // console.log(data)
                }
            })
            break;
        }
        case '/contact' : {
            fs.readFile("./Files/Contact.html",'utf8',(err,data)=>{
                if (err) {
                    console.log("Error Is : "+err)
                } else {
                    response.write(data);     
                    response.end();
                    // console.log(data)  
                }
            })    
            break;
        }
        case '/login' : {
            fs.readFile("./Files/Login.html",'utf8',(err,data)=>{
                if (err) {
                    console.log("Error Is : "+err)
                } else {
                    response.write(data);
                    response.end();
                    // console.log(data)
                }
            })
            break;
        }
        default : {
            response.write("<h1>Invalid URL...</h1>")
            break;
        }
    }
    // response.write(data);
    // response.end();
})

server.listen(9090,function(){
    console.log("http://localhost:9090/")
});


