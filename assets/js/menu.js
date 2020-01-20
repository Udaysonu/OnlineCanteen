 

var items_list=[];
var items=[]

$('.add_btn').on('click',function(e){
    e.preventDefault();
    var value=$(this).attr('value')
    items.push(value)
    console.log($(this).attr('value'));
    $.ajax({
        type:'get',
        url:'/dashboard/getdetails/'+value,
        
        success:function(data){
            items_list.push(data)
            console.log(items_list);
            cart(items_list);
        }

    })


})

cart=function kart(list){
    var cost=0;
    $("#cart").html("");
    for(i of list){
        $('#cart').append('<li> <strong>Item: </strong>'+i.name+'<strong> Price : </strong>'+i.price+' </li>')
        cost=cost+parseInt(i.price);

    }
    $('#cart').append('<li> <div id="total_cart">'+'<strong> Total cost : </strong>'+cost+' </div></li>')
    console.log(cost);


}



$('#place_order_btn').on('click',function(e){
    if(items.length==0){
        e.preventDefault();
        return
    }
    var user=$(this).attr('value');
    $.ajax({
        type:'post',
        url:"/dashboard/order/placeorder",
      
        data:{
            mobile:$('#customer_mobile').val(),
            name:$('#customer_name').val() ,
            list:items,
            user:user,
            welcome:'welcome'
        },
        success:function(data){
            console.log(data)
        },
        error:function(err){
            console.log(err)
        }
        
    })

})