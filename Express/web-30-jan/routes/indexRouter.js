// All Visitor Functionality
const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    // res.send("<h1>Default URL Invoked.....</h1>")
    res.render('../views/visitor/Home.ejs')
})
route.get('/about',(req,res)=>{
    // res.send("<h1>About URL Invoked.....</h1>")
    res.render('../views/visitor/About.ejs')
})
route.get('/contact',(req,res)=>{
    // res.send("<h1>Contact URL Invoked.....</h1>")
    res.render('../views/visitor/Contact.ejs')
})
route.get('/login',(req,res)=>{
    // res.send("<h1>Login URL Invoked.....</h1>")
    res.render('../views/visitor/login.ejs')
})

module.exports = route;