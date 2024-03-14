const net = require('net');

const SERVER_HOST = 'localhost'; // Server IP address
const SERVER_PORT = 3000; 

// Create client instance
const client = new net.Socket();

// Connect to server
client.connect(SERVER_PORT, SERVER_HOST, () => {
    console.log('Connected to server');
    
    // Event listener for receiving data from server
    client.on('data', (data) => {
        console.log('Received message:', data.toString());
    });

    // Event listener for client disconnection
    client.on('close', () => {
        console.log('Connection closed');
    });

    // Event listener for handling errors
    client.on('error', (err) => {
        console.error('Error:', err.message);
    });
});

// Function to send message to server
const sendMessage = (message) => {
    client.write(message);
};

// Read input from terminal and send to server
process.stdin.on('data', (input) => {
    const message = input.toString().trim();
    sendMessage(message);
});
