const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());
const https = require('https');
const fs = require('fs');
const options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
}
const server = https.createServer(options, app).listen(process.env.PORT || 3001);
const { Server } = require('socket.io');
const { addUser, getAllUser, removeUser, userReady, updateUser } = require('./Users/users');
const io = new Server(server, { cors: { origin: "*" } });


io.on('connection', (socket) => {
    const username = socket.request?._query["username"];
    if (username) {
        console.log(username + ' connected');
        const userConnected = getAllUser();
        const socketId = socket.id;
        // console.log(username, " connected.");

        if (userConnected.length < 2) {
            addUser(socketId, username);
            emitEvent(socketId, 'playerNumber', { playerNumber: userConnected.length });
        } else {
            emitEvent(socketId, 'gameJoined', { message: "Only 2 play can join this game, please wait for game to finish." })
        }


        socket.on('playerReady', (data) => {
            userReady(data.username);
            const users = getAllUser();
            if (users.filter((user) => user.isReady).length === 2) {
                sendEventToAllUser('startGame', users, { whichPlayerTurn: users[0].username, allPlayers: userConnected.map(user => { return { username: user.username } }) });
            }
        });

        socket.on('placedBet', (data) => {
            const userTurn = userConnected.filter(user => user.username !== data.username);
            updateUser(data.username, data);
            const bothPlayerBetPlaced = userConnected.filter(user => user.betAmount > 0).length === 2;
            console.log('bothPlayerBetPlaced=', bothPlayerBetPlaced, userConnected);
            if (bothPlayerBetPlaced) {
                sendEventToAllUser('startHand', userConnected);
                return;
            }
            emitEvent(userTurn[0].socketId, 'changeTurn', { whichPlayerTurn: userTurn[0].username })
        });

        socket.on('disconnect', () => {
            removeUser(username);
            console.log(username + ' disconnected');
        });
    } else {
        console.log("unable to connect, username is missing.")
    }
});

const sendEventToAllUser = (eventName, users, data = {}) => {
    for (let i = 0; i < users.length; i++) {
        console.log('socketId=', users[i].socketId)
        emitEvent(users[i].socketId, eventName, data);
    }
}

const emitEvent = (socketId, eventName, data = {}) => {
    const users = getAllUser();
    let allPlayers = [...users].map(({ ...user }) => {
        delete user.socketId;
        return user;
    });

    data = { ...data, allPlayers }
    io.to(socketId).emit(eventName, data);
}