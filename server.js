require ('./models/db')
const express = require('express')
const path = require('path')
const exphbs  = require('express-handlebars');
 
const controllercomic = require ('./controller/controllercomic');
const bodyParser = require('body-parser');
 

  

var app= express();

app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(bodyParser.json())
app.set('wiews',path.join(__dirname,'/views/'))
app.engine('hbs',exphbs({extname:'hbs',defaultLayout : 'mainLayout',layoutsDir:__dirname +'/views/layouts'}))

app.set('view engine','hbs')


app.listen(5000,()=>console.log('application run in port 3000'))

app.use('/comics',controllercomic )