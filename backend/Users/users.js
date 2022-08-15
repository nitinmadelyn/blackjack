const users = [];

const addUser = (socketId, username) => {
    users.push({ socketId, username, isReady: false, betAmount: 0 });
}

const removeUser = (socketIdOrUsername) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === socketIdOrUsername || users[i].socketId === socketIdOrUsername) {
            users.splice(i, 1);
        }
    }
}

const getUser = (socketIdOrUsername) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === socketIdOrUsername || users[i].socketId === socketIdOrUsername) {
            return users[i];
        }
    }
}

const updateUser = (username, data) => {
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username) {
            users[i] = { ...users[i], ...data }
        }
    }
}

const userReady = (username) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            users[i].isReady = true;
        }
    }
}

const getAllUser = () => {
    return users;
}

module.exports = { addUser, removeUser, getUser, getAllUser, updateUser, userReady }