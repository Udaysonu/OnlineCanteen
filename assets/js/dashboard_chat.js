


$('#connect_user').on('click',function(){
    var socket = io.connect('http://localhost:300');
    var user=$('#get_chat_user').val();
    socket.emit('join_room', { user:user });
        socket.on('receive_message' , function(data){
        console.log(data);
    });
    
    $('.send_btn').on('click',function(e){
 
        e.preventDefault();
        socket.emit('send_message',$('#send_message_admin').val());
        $('#send_message_admin').val('');

})
});


      
 
 