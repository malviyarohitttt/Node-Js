const express = require('express')
const app = express();

app.set('view engine', 'ejs');
app.set('views','./pages')

app.get('/',(request,response)=>{

    let arr = [10,20,74,73,80,50,40,1,90,60,30];
    response.render('Home.ejs',{arr:arr})
})

app.listen(9090,()=>{
    console.log('http://localhost:9090')
});

