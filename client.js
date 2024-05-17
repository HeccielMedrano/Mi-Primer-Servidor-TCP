const net = require('net');

const client = new net.Socket
var is_first_message_sent = true

client.connect(5000, '127.0.0.1', () => {
    console.log("Conexion exitosa.");

     
});

client.on('close', () => {
    console.log("Conexion terminada.");
});

client.on('data', (data) => {
    if (is_first_message_sent)
    {
        console.log(`${data}`);
        is_first_message_sent = false
    }
    else
    {
        console.log(`Un cliente dice: ${data}`);
    }
    
});
