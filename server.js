var express = require('express');
var app = express();

const services = require('./router/services')
const contact = require('./router/contact')
const home = require('./router/home')

app.set("view engine","ejs");
app.engine('ejs', require('ejs').__express);


app.use("/",services);
app.use("/",contact);
app.use("/",home);

app.listen(4000);