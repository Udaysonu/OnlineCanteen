const mongoose=require('mongoose');  
var Schema = mongoose.Schema;
var path=require('path');
 

var ItemSchema = new Schema({    
    name: {type: String,

            required:true
        },
    price:{
        type:String,
        required:true
    },
    offer:{
        type:String,
        
    },
    description:{
        type:String
    }
     
});
  
var Item = mongoose.model('ItemSchema', ItemSchema);
module.exports=Item;