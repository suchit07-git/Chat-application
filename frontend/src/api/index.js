var socket = new WebSocket("ws://localhost:8080/ws");

let connect = cb => {
    console.log("Connecting");

    socket.onopen = () => {
        console.log("Successfully connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg);
    };

    socket.onclose = event => {
        console.log("Socket connection closed:", event);
    };

    socket.onerror = error => {
        console.log("Socket error:" , error);
    };
};

let sendMsg = msg => {
    console.log("Sending message:", msg);
    socket.send(msg);
};

export { connect, sendMsg } 
