import 'regenerator-runtime/runtime';
import path from 'path';
import feathers from 'feathers';
import { MongoClient } from 'mongodb';
import hooks from 'feathers-hooks';
import rest from 'feathers-rest';
import configuration from 'feathers-configuration';
import socketio from 'feathers-socketio';
import bodyParser from 'body-parser';
import allServices from './services/index';

// import webpack from 'webpack';
// import webpackMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from '../../webpack.config';

const app = feathers();
// const compiler = webpack(webpackConfig);

// app.use(webpackMiddleware(compiler));
// app.use(webpackHotMiddleware(compiler));

app
  .configure(configuration(process.cwd()))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(feathers.static(path.join(process.cwd(), 'public')));

const server = async () => {
	const db = await MongoClient.connect(app.get('mongoURI'));
	app.configure(allServices(db));
	// const x = await app.service('/users').find();
	// console.log(x, ' da tasks')
	return app;
};

export default server;
