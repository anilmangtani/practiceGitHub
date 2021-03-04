const socket = io('http://localhost:8000')
const form  = document.getElementById('send-container');
const messageInput = document.getElementById('msgInp');
const messageContainer = document.querySelector(".container");
let name = prompt("Enter your name");
socket.emit('new-user-joined', name);