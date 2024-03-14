# Real-Time Chat Application using Node.js and Sockets

## Introduction
This application is a simple real-time chat server and client built using Node.js and sockets. It allows multiple clients to connect to the server and exchange messages in a shared chatroom environment.

## Instructions
### Running the Server
1. Make sure you have Node.js installed on your machine.
2. Clone the repository to your local machine.
3. Navigate to the project directory.
4. Run the following command to start the server:
   ```bash
   node server.js
   ```
   Replace `server.js` with the filename of your server code if different.
5. The server will start listening for incoming connections on the specified port.

### Running the Client
1. Make sure you have Node.js installed on your machine.
2. Clone the repository to your local machine.
3. Navigate to the project directory.
4. Run the following command to start the client:
   ```bash
   node client.js
   ```
   Replace `client.js` with the filename of your client code if different.
5. The client will connect to the server using the specified IP address and port. Now, client can send message to all other clients and can receive messages from server

## Architecture and Concurrency
The application follows a client-server architecture, where the server listens for incoming connections from clients and broadcasts messages received from one client to all connected clients. Concurrency is handled using asynchronous I/O in Node.js, allowing the server to handle multiple client connections concurrently without blocking.

## Assumptions and Design Choices
1. **Language Choice**: We chose Node.js for its event-driven, non-blocking I/O model, which is well-suited for real-time applications like chat.
2. **Socket API**: We utilized the standard socket library provided by Node.js for network communication, ensuring compatibility and reliability.
3. **Threading vs. Asynchronous**: We opted for asynchronous I/O instead of threading to handle multiple clients, as it provides better scalability and resource efficiency in Node.js applications.
4. **No External Libraries**: We refrained from using external libraries or frameworks for the chat logic to keep the codebase lightweight and maintainable.

## Accessing the Chat Application
Once the server is running, clients can connect to it using the specified IP address and port. Users can then send and receive messages in real-time within the chatroom environment.
