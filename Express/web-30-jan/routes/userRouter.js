// All User Functionality
const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    // res.send("<h1>User home URL Invoked.....</h1>")
    res.render('../views/user/Home.ejs')
})
route.get('/profile',(req,res)=>{
    // res.send("<h1>Profile URL Invoked.....</h1>")
    res.render('../views/user/Profile.ejs')
})
route.get('/viewOrder',(req,res)=>{
    // res.send("<h1>viewOrder URL Invoked.....</h1>")
    res.render('../views/user/ViewOrder.ejs')
})
route.get('/cpUser',(req,res)=>{
    // res.send("<h1>cpUser URL Invoked.....</h1>")
    res.render('../views/user/CpUser.ejs')
})

module.exports = route;