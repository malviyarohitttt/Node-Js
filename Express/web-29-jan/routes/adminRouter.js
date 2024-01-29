// All Admin Functionality
const express = require('express');
const route = express.Router();

route.get('/',(req,res)=>{
    // res.send("<h1>Admin home URL Invoked.....</h1>")
        res.render('../views/admin/Home.ejs')

})
route.get('/addProduct',(req,res)=>{
    // res.send("<h1>Add Product URL Invoked.....</h1>")
        res.render('../views/admin/addProduct.ejs')

})
route.get('/viewAllUser',(req,res)=>{
    // res.send("<h1>viewAllUser URL Invoked.....</h1>")
        res.render('../views/admin/viewAllUser.ejs')

})
route.get('/viewProduct',(req,res)=>{
    // res.send("<h1>viewProduct URL Invoked.....</h1>")
        res.render('../views/admin/viewProduct.ejs')

})
route.get('/manageUser',(req,res)=>{
    // res.send("<h1>manageUser URL Invoked.....</h1>")
        res.render('../views/admin/manageUser.ejs')

})

module.exports = route;