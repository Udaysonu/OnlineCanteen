const nodemailer=require('../config/nodemailer');



module.exports.sendmail=function(comment){
    
console.log("send mail succesfully")    
nodemailer.transporter.sendMail({
from:"udaysonubakka123@gmail.com",
to:"u mmmmmmmm,mkm,,m,m,m,m,m,m,3@gmail.com",
subject:"Welcome",
text:"new account craeted",
html:"<h1> New account created </h1>"


}
)
}