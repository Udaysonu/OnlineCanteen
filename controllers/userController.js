const User=require('../models/userSchema');
const restaurant=require('../models/restaurants');
const cart_list=require('./dashboardController').cart_list;
module.exports.signin=function(req,res){
    if(req.isAuthenticated()){
        req.flash('info','Already Signed In !!');
        return res.redirect('/users/restaurants');
    } 
   
    return res.render('signin');
}
module.exports.signup=function(req,res){
    if(req.isAuthenticated()){
        req.flash('info',"Already Signed In !!")
        return res.redirect('/users/restaurants');
    }


    return res.render('signup');
}

module.exports.createAccount=async function(req,res){
    console.log(req.body);
    try{
    let user=await User.find({email:req.body.email})
    console.log(user)
        if(user.length>0){
            req.flash('error','Email already existy! Try with new email');
            return res.redirect("back")
        }
    if(req.body.password==req.body.re_password){
    let user= await User.create(req.body)
        console.log(user);
         
        req.flash("success","Account Created Succesfully!!!")
        return res.redirect('/users/signin');
     
}else{
    req.flash('error',"Incorrect Username/Password")
    return res.redirect('back')
}
}catch(err){
    if(err){
        console.log(err)
    }
}
}



module.exports.orderHome=function(req,res){
    req.flash('success','Signed In Succesfully !!');
    return res.redirect('/')
}

module.exports.restaurants=function(req,res){
    restaurant.find({}).populate('maincourse').exec(function(err,rest){
    
        return res.render('all_restaurants',{
            restaurants:rest

        })
    })
}
module.exports.menu=function(req,res){

    restaurant.findById(req.params.id).populate('maincourse').populate('drinks').populate('snacks').exec(function(err,restaurant){
       console.log(cart_list)
        return res.render( 'menu' , { 
            restaurant : restaurant,
            cart_list : cart_list
})
})}


module.exports.signOut=function(req,res){
    if(req.isAuthenticated())
    {   req.logout();
        req.flash('success','You Logged Out!!!')
        return res.redirect('/users/signin')
    }
    req.flash('info','You Did not logged in yet !!!!')
    return res.redirect('/');
}
module.exports.success_order=function(req,res){
    res.render('order_complete');
}


module.exports.contact=function(req,res){
    res.render('contact');
}