const path = require('path');
const express = require('express');
const app = express();

const indexRouter = require('./routes/indexRouter')
const adminRouter = require('./routes/adminRouter')
const userRouter = require('./routes/userRouter')

app.use(express.static(path.join(__dirname, 'public/')));

app.set('view engine', 'ejs');

app.use('/',indexRouter)        // http://localhost:9090/               
app.use('/admin',adminRouter)   // http://localhost:9090/admin/         (admin home page)
app.use('/user',userRouter)     // http://localhost:9090/user/          (user home page)

app.listen(9090);
console.log("http://localhost:9090");