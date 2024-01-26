const express = require('express')
const app = express();

app.set('view engine', 'ejs');
app.set('views','./pages')

app.get('/',(request,response)=>{

    let arr = [11,20,3,45,55,19,11,25,99,10];
    response.render('Test.ejs',{arr:arr})
})

app.listen(9090,()=>{
    console.log('http://localhost:9090')
});

