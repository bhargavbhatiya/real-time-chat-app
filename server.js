const net = require('net');

const PORT = 3000;

// Create server instance
const server = net.createServer();
let clients = [];

// Event listener for new client connections
server.on('connection', (client) => {
    console.log('New client connected');

    // Add client to the list of connected clients
    clients.push(client);

    // Event listener for incoming data from clients
    client.on('data', (data) => {
        console.log(`New message from ${client.remoteAddress}: ${data.toString()}`);
        // Broadcast received message to all other connected clients
        clients.forEach((c) => {
            if (c !== client) {
                c.write(data);
            }
        });
    });

    // Event listener for client disconnection
    client.on('end', () => {
        console.log('Client disconnected');
        // Remove disconnected client from the list
        clients = clients.filter((c) => c !== client);
    });

    // Event listener for handling errors
    client.on('error', (err) => {
        console.error('Error:', err.message);
    });
});

// Start server and listen for incoming connections
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
