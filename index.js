const express=require('express');
const app=express();
const port=8000;
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.use(express.urlencoded());
app.use(express.static('assets'));



app.use('/',require('./routes/index'));






app.listen(port,function(err){
    if(err){
        return console.log("Error in starting the server");
    }
    return console.log("Server started succesfully");
})