const express = require('express')
const app = express();

app.set('view engine', 'ejs');
app.set('views','./pages')

app.get('/',(request,response)=>{
    var name = 'Rohit';
    var location = 'Indore';
    response.render('Add.ejs',{name,location})
})

app.get('/first',(request,response)=>{
    var num = [10,20,30,40,50,60,70,80,90,100];

    response.render('First.ejs',{num:num})
})

app.get('/second',(request,response)=>{
    response.render('Second.ejs')
})

app.get('/add',(request,response)=>{
    var x = 100;
    var y = 200;
    response.render('Add.ejs',{x,y})
})


app.listen(9090,()=>{
    console.log('http://localhost:9090')
});

