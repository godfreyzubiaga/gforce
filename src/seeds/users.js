import createServer from "../backend/app";
import {ObjectId} from 'mongodb';

const seed = async () => {
  const app = await createServer();

    const users = [
        {
            _id : ObjectId('5995c5c438070f179c609413'),
            name : 'Brent Antohny Tudas',
            rating : 7,
            address : "Tabuc Suba",
            username: 'Btuds',
            password: 'anthony',
        },
        {
            _id : ObjectId('5995c5c438070f179c609411'),
            name : 'Li Arolf Rey',
            rating : 4,
            address : "Marco Polo",
            username: 'Lili',
            password: 'arolf',
        },
        {
            _id : ObjectId('5995c5c438070f179c609412'),
            name : 'Glyda Mae Torres',
            rating : 6,
            address : "Grandxing",
            username: 'glyda',
            password: 'mae',
        }
    ]

  const userService = app.service("/users");
  await userService.remove(null);
  return Promise.all(users.map(user => userService.create(user)));
};

export default seed;
