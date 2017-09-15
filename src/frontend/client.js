import feathers from 'feathers';
import socketio from 'feathers-socketio';
import io from 'socket.io-client';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import clientServices from './services';


const host = location.host
const protocol = host.startsWith('local') ? 'http' : 'https';
let url = `${protocol}://${location.host}`;
if(window.cordova) {
    url = 'http://192.168.1.100:8000';
}
const socketConnection = nativeSocketio(url);

const client = feathers();

client.configure(hooks());
client.configure(socketio(socketConnection));
client.configure(auth({ storage: window.localStorage }));
client.configure(clientServices());

window.app = client;	//debug

export default client;
