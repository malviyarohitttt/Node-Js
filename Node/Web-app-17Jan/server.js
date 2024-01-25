const http = require('http');
const fs = require('fs');
const path = require('path');

const web = http.createServer((request,response)=>{
    const url = request.url;
    console.log("Url is : " + url);
    // console.log("Path is : " + path.extname(url));

    const extName = path.extname(url);

    if(extName === ""){
        switch (url) {
            case '/':
                fs.readFile('./Files/Home.html','utf8',(error,data)=>{
                    if (!error) {
                        response.write(data);
                        response.end();
                    } 
                })
                break;
    
            case '/about':
                fs.readFile('./Files/About.html','utf8',(error,data)=>{
                    if (!error) {
                        response.write(data);
                        response.end();
                    }
                })
                break;
    
            case '/contact':
                fs.readFile('./Files/Contact.html','utf8',(error,data)=>{
                    if (!error) {
                        response.write(data);
                        response.end();
                    }
                })
                break;
    
                default : {
                    response.write("Invalid URL...");
                    response.end();
                }
        }
    }else{
        // console.log("Hello...")

        switch (extName) {
            case '.jpg':
            case '.jpeg':
            case '.png':
                var data = fs.readFileSync("."+url)
                response.writeHead(200,{"content-type":"image"})
                response.write(data)
                response.end();
        }

    }
})

web.listen(8989,function(){
    console.log("http://localhost:8989")
})
