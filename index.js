// Import the library
const server = require('server');
const { get, post } = server.router;
const { render, redirect } = server.reply;
// Launch the server to always answer "Hello world"
// server(ctx => 'Hello world!')
server([
    get('/', () => render('index.html'))
]);