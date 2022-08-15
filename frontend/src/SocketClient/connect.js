import io from 'socket.io-client';
import config from '../Config/config';

const connectSocket = (username) => {
    return io(config.chatServerURL.replace('{username}', username), { secure: true });
}

export default connectSocket;