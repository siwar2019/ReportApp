
import { BASE_URL } from './config';
import { getToken } from '../assets/cache';
import io from 'socket.io-client/dist/socket.io';

module.exports = async function () {
    let token = await getToken();
    let connectionConfig = {
        transports: ['websocket'], jsonp: false,
        'forceNew': true,
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
        pingTimeout: 10000,
        reconnectionAttempts: 99999,
        query: `token=${token}`
    };
    socket = io(BASE_URL, connectionConfig);
    return socket;
}
