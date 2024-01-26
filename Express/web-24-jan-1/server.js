const express = require('express')
const app = express();

app.set('view engine', 'ejs');
app.set('views','./pages')

app.get('/',(request,response)=>{

    let arr = [10,20,74,73,80,50,40,1,90,60,30,100,202];
    // response.render('Home.ejs',{arr:arr})
    let student = [
        {
            id:1,
            name: 'Rohit',
            age: 20
        },
        {
            id:2,
            name: 'Mohit',
            age: 21
        },
        {
            id:3,
            name: 'Vishal',
            age: 22
        },
        {
            id:4,
            name: 'Devansh',
            age: 21
        },
        {
            id:5,
            name: 'Mahi',
            age: 42
        },
    ]
    response.send(student)
})

app.listen(9090,()=>{
    console.log('http://localhost:9090')
});

