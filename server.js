const net = require('net');

let clients_connected = []

const server = net.createServer((con) => {
    con.write("Servidor iniciado correctamente");
    console.log("Recibi una conexion remota");
    /* con.pipe(con); */

    clients_connected.push(con)

    con.on('data', (data) => {
        clients_connected.forEach((client) => {
            if (client !== con) {
                client.write(data);
            }
        });
    });
});

server.listen(5000, '127.0.0.1');