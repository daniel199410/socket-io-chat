const socket = io();
const message = document.getElementById('message');
const username = document.getElementById('username');
const sendButton = document.getElementById('send');
const output = document.getElementById('output');
const actions = document.getElementById('actions');

sendButton.addEventListener('click', () => {
    socket.emit('chat.message', {
        message: message.value,
        username: username.value
    });
    message.value = '';
});

message.addEventListener('keypress', () => socket.emit('chat.typing', username.value));

socket.on('chat.message', data => {
    actions.innerHTML = '';
    output.innerHTML += `<p><strong>${data.username}:</strong> ${data.message}</p>`
});
socket.on('chat.typing', data => actions.innerHTML = `<p><em></em>${data}</em> is typing a message</p>`)