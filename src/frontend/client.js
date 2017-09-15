import feathers from 'feathers';
import socketio from 'feathers-socketio';
import io from 'socket.io-client';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import clientServices from './services';

const socket = io('http://localhost:3000');

const client = feathers();

client.configure(hooks());
client.configure(socketio(socket));
client.configure(auth({ storage: window.localStorage }));
client.configure(clientServices());

export default client;
