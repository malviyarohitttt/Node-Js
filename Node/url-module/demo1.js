const url = require('url');
let myurl = "http://www.abcd.com:9090/DemoApp?name=Rohit&age=20&mobile=9669264151"
console.log(myurl)

const obj = url.parse(myurl,true);
console.log(obj)

console.log(obj.port)
console.log(obj.host)
console.log(obj.path)
console.log(obj.pathname)
console.log(obj.query)
console.log(obj.query.name)
console.log(obj.query.age)
console.log(obj.query.mobile)