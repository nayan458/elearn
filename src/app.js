const express = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const path = require("path");
const fs = require("fs");

const xmldta = path.join(__dirname,"../views/Dta.text");
const dta = fs.readFileSync(xmldta,"utf-8")

const public = path.join(__dirname,"./public");
const partials = path.join(__dirname,"./partials");

const app = express();
app.use(express.static(public));
app.set("view engine","hbs");

hbs.registerPartials(partials);

app.get("/",(req,res)=>{
    res.render('index');
})

app.get('/dta',(req,res)=>{
    res.send(dta);
})

app.get('/login',(req,res)=>{
    res.render('loin')
})

app.listen(port,()=>console.log(`app is listening at port ${port}`));