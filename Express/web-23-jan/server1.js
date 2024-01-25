const express = require('express')
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('Home.ejs')
})

app.get('/about', (req, res) => {
    res.render('About.ejs')
})

app.get('/contact', (req, res) => {
    res.render('Contact.ejs')
})

app.get('/login', (req, res) => {
    res.render('Login.ejs')
})


app.listen(9090,(()=>{
    console.log("http://localhost:9090/")
}))