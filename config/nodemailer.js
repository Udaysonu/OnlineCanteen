const nodemailer=require('nodemailer');


module.exports.transporter=nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"udaysonubakka1jhjkjhk23@gmail.com",
        pass:"udayyahhhjhkjhkhjkhjkjhkhjdusonu1"
    }



})
module.exports.renderTemplage=function(){
    
      
     
}
 