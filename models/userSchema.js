const mongoose=require('mongoose');  
var Schema = mongoose.Schema;
var multer=require('multer');
var path=require('path');
 

var userSchema = new Schema({
     // String is shorthand for {type: String}
    email:{type: String,
        required:true},
    password:   {type:String,
        required:true},
    name: {type: String,

            required:true},
    
    mobile:{
        type:String,
         
    },
    rollno:{
        type:String,
            
    },
    gender:{
         type:String
         
    },
    
    avatar:{
        type:String
    }
});
  
var User = mongoose.model('UserSchema', userSchema);
module.exports=User;