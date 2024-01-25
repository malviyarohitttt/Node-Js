const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Home URL invoked : </h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>About URL invoked : </h1>")
})

app.get('/contact', (req, res) => {
    res.send("<h1>Contact URL invoked : </h1>")
})

app.get('/login', (req, res) => {
    res.send("<h1>Login URL invoked : </h1>")
})

app.get('/register', (req, res) => {
    res.send("<h1>Register URL invoked : </h1>")
})

app.listen(9090,(()=>{
    console.log("http://localhost:9090/")
}))