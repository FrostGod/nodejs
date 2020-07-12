const http = require('http');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());


app.use('/add-product' , (req,res,next) => {
    res.send('<form action = "/product" method = "POST"> <input type = "text" name = "title"><button type="submit">Add product </button> </form>');
});

app.use('/product' ,(req, res , next) => {
    console.log(req.body);
    res.redirect('/add-product');
});

app.use('/from',(req, res , next) => {
    res.send('<h1>hello from you</h1>');
    // next();
});


app.use('/' , (req, res , next) => {
    console.log("middleware 2");
    res.send('<h1>hello from me</h1>');
    
});

app.listen(3000);
