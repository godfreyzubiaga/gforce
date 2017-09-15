import feathers from 'feathers';
import socketio from 'feathers-socketio';
import nativeSocketio from 'socket.io-client';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import clientServices from './services';


const host = location.host
// const protocol = host.startsWith('local') ? 'http' : 'https';
let url = `${'http'}://${location.host}`;
if(window.cordova) {
    url = 'http://10.10.10.66:3000';
    console.log(url, '======================================================================================================');
}
const socketConnection = nativeSocketio(url);
console.log(url, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')

const client = feathers();

client.configure(hooks());
client.configure(socketio(socketConnection));
client.configure(auth({ storage: window.localStorage }));
client.configure(clientServices());

window.app = client;	//debug

export default client;
