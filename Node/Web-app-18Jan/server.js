const http = require('http');
const url = require('url');

const web = http.createServer((request,response)=>{
    let parseUrl = url.parse(request.url,true)
    if(parseUrl.pathname == '/add' && request.method=='GET'){
        var x = parseInt(parseUrl.query.x);
        var y = parseInt(parseUrl.query.y);
        
        console.log("Value of x : " + x)
        console.log("Value of y : " + y)
        console.log(typeof x)
        console.log(typeof y)

        var z = parseInt(x)+parseInt(y)
        console.log("Addtion is : "+z)
        response.write("Addtion is : "+z)
        response.end();
    }

})

web.listen(9090,()=>{
    console.log("http://localhost:9090/add?x=10&y=40")
})
