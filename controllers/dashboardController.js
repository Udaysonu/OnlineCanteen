const restaurant=require('../models/restaurants');
const Item=require('../models/item');
const Order=require('../models/order');
var cart_list=[];
var chat_list=[]

module.exports.Restaurant=function(req,res){


    res.render('create_restaurant');
   
}

module.exports.updateRest=function(req,res){
    restaurant.find({}).populate('maincourse').populate('drinks').populate('snacks').exec(function(err,restaurants){
        return res.render('welcome_canteen',{
            restaurants:restaurants
        })
    })
}


module.exports.createRestaurant=function(req,res){
    restaurant.create(req.body,function(err,rest){
        if(err){
            console.log("Error in creating restaurnt");
            return
        }
        console.log('Created restaurant succesfully');
        restaurant.find({}).populate('maincourse').exec(function(err,restaurants){
            return res.render('welcome_canteen',{
                restaurants:restaurants
            })
        })
       
    })
}

module.exports.editMenu=function(req,res){

    restaurant.find({}).populate('maincourse').populate('snacks').populate('drinks').exec(function(err,restaurants){
        return res.render('welcome_canteen',{
            restaurants:restaurants
        })
    })
}


module.exports.createMaincourse=function(req,res){

    console.log(req.body,'_____');
    restaurant.findById(req.body.rest,function(err,restaurant){
            Item.create(req.body,function(err,item){

                restaurant.maincourse.push(item._id);
                restaurant.save();
                return res.redirect('/dashboard/restaurant/editmenu');
            });


    })


}




module.exports.createDrinks=function(req,res){

    
    restaurant.findById(req.body.rest,function(err,restaurant){
            Item.create(req.body,function(err,item){

                restaurant.drinks.push(item._id);
                restaurant.save();
                return res.redirect('/dashboard/restaurant/editmenu');
            });


    })


}
module.exports.createSnacks=function(req,res){

    console.log(req.body,'_____');
    restaurant.findById(req.body.rest,function(err,restaurant){
            Item.create(req.body,function(err,item){

                restaurant.snacks.push(item._id);
                restaurant.save();
                return res.redirect('/dashboard/restaurant/editmenu');
            });


    })


}


module.exports.order_dashboard=function(req,res){
   Order.find({}).sort('-createdAt').populate('list').populate('user').exec(function(err,orders){
    res.render('orders_dashboard',{
        orders:orders
    })
   })
   
}






module.exports.deleteItem=function(req,res){

   console.log(req.query);
restaurant.findById(req.query.rest,function(err,rest){
    if(req.query.type='maincourse'){
        console.log(rest)
        rest.maincourse.pull( req.query.id );
        rest.save();
        Item.findById(req.query.id,function(err,item){
            item.remove();
        });

    }
    else if(req.query.type='snacks'){
        rest.snacks.pull(req.query.id)
        rest.save();
        Item.findById(req.query.id,function(err,item){
            item.remove();
        });
    }
    else if(req.query.type='drinks'){
        rest.drinks.pull(req.query.id)
        rest.save();
        Item.findById(req.query.id,function(err,item){
            item.remove();
        });
    }
    return res.redirect('back');



})
}




module.exports.getDetails=function(req,res){
    console.log(req.params);
     Item.findById(req.params.id,function(err,item){
              
            res.json(200,{
                name:item.name,
                price:item.price,
                
            })
     })
}
module.exports.placeorder=function(req,res){
     
    if(req.user.id==req.body.user){
        Order.create(req.body,function(err,order){
            if(err){

                console.log(err);
            }
            console.log(order);
            console.log('came')
            
        })
        req.flash("success","Order Placed successfully")
        return res.json(200,{
            data:'success'
        });
    

    } 
    else{
        return res.json(404,{
            data:'user not found'
        })
    }
    
}

module.exports.cart_list=cart_list;



module.exports.chatRequest=function(req,res){
    
    if(req.xhr){
        chat_list.push(req.params.id);
         
       return res.json(200,{
            message:'succesfully received chat request'
        })
    }
    return res.render('chatroom_dashboard',{list:chat_list})
}