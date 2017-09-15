import { ObjectId } from 'mongodb';
import setupApp from '../app';

const seed = async () => {
  const app = await setupApp();

  const users = [
    {
      username: 'dummy',
      password: 'password',
    }
  ];

  const userService = app.service('/users');
  await userService.remove(null);
  return Promise.all(users.map(user => userService.create(user)));
};

export default seed;
