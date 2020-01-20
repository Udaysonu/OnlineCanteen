const User=require('../../models/userSchema');
module.exports.updateUser=function(req,res){
    console.log(req.params.id,req.body)
    User.findByIdAndUpdate(req.params.id,req.body,function(err,user){
        if(err){
            console.log('error in updating the user');
            return res.redirect('back')
        }
        return res.redirect('back');
    })
}


module.exports.user_list=function(req,res){
    User.find({},function(err,users){
        return res.render('users_dashboard',{
            users:users
        })
    })
}