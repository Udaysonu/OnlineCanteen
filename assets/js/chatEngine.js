var socket = io.connect('http://localhost:300');
socket.emit('join_room',{user:'user'});
    $.ajax({
        type:'get',
        url:'/dashboard/chat/'+'user'

    })

socket.on('receive_message',function(data){
    console.log(data);
})
 
$('.send_btn').on('click',function(e){

        e.preventDefault();
        socket.emit('send_message',$('#send_message').val());
        $('#send_message').val('');
        
})
    
      

 