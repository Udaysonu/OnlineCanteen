const express=require('express');
const app=express();
const port=8000;
const path=require('path');
const layouts=require('express-ejs-layouts');
const mongoose=require('./config/mongoose');
const passport=require('passport');
const local_strategy=require('./config/passport_local_strategy');
var session = require("express-session");
const cookieParser=require('cookie-parser');
var flash=require('connect-flash');
var server = require('http').Server(app)
var io = require('./config/chatSocket').socketserver(server);
app.use(layouts );
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)
app.use(express.urlencoded({extended: true }));
app.use(express.static('./assets'));

 
app.use(session({ name:'codeial',
secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser)
app.use(cookieParser())
app.use(flash())
app.use(require('./middleware/flashmiddleware').setflash)





server.listen(300,function(err){
    if(err){
        console.log('Err in socket server',err)
        return
    }
    return console.log('Socket server started');
})
app.use('/',require('./routes/index'));
 





app.listen(port,function(err){
    if(err){
        return console.log("Error in starting the server");
    }
    return console.log("Server started succesfully");
})