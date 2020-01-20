module.exports.socketserver=(server)=>{
  

    io=require('socket.io')(server)
    io.on('connection', function (socket) {
        
         
        let sok=socket.on('join_room', function (data) {
        console.log(data.user,'999999');
        var room=data.user
        socket.join(room);
        socket.on('send_message',function(data){             
            io.in(room).emit('receive_message',data)
        })

        io.in(room).emit('receive_message',"welcome here!!!!");


        });
        
      });


}