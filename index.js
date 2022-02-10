require('dotenv').config();
const path = require('path');
const express = require('express');

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname)));

server.get('/api/users', (req, res) => {
    res.json([
        { id: 1, username: 'Ahmad'},
        { id: 2, username: 'Brandon'},
        { id: 3, username: 'Drew'},
        { id: 4, username: 'Goku'},
        { id: 5, username: 'Borat'},
        { id: 6, username: 'Jackie Chan' }
    ])
});

server.post('/api/register', (req, res) => {
    res.json({
        username: req.body.username,
        password: req.body.password,
    })
});

server.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        res.json({
            message: `Hello ${username}, ya filthy animal!`
        })
    } else {
        res.json({
            message: "You're not doing it right somehow. Try again."
        })
    }
    
});

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname))
});

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`==>listening on ${PORT}<==`);
})