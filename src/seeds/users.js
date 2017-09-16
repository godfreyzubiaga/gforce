import createServer from "../backend/app";
import {ObjectId} from 'mongodb';

const seed = async () => {
  const app = await createServer();

    const users = [
        {
            _id : ObjectId('5995c5c438070f179c609413'),
            name : 'Brent Antohny Tudas',
            reputation : 7,
            age : 19,
            phoneNumber : '09088617324',
            address : "Tabuc Suba",
            username: 'Btuds',
            password: 'anthony',
            accountNumber: '101161034170',
            image : 'https://i.pinimg.com/736x/1f/41/6d/1f416d98179f0c22180e98ca9ab6d697--mens-hairstyles-hot-pink.jpg'
        },
        {
            _id : ObjectId('5995c5c438070f179c609411'),
            name : 'Li Arolf Rey',
            reputation : 4,
            age : 19,
            phoneNumber : '09088617324',
            address : "Marco Polo",
            username: 'Lili',
            password: 'arolf',
            accountNumber: '101743048137',
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xxGmekR7YkpfXgN_uexg_7gT6pLHwY4jNSiHEflViLM1K0ec'
        },
        {
            _id : ObjectId('5995c5c438070f179c609412'),
            name : 'Glyda Mae Torres',
            reputation : 6,
            age : 19,
            phoneNumber : '09088617324',
            address : "Grandxing",
            username: 'glyda',
            password: 'mae',
            accountNumber: '100717396332',
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSA2C6Fzcu0ke2UPXdBJQ8jzRSHvVNlBZ09aJnuicpbE3JskmXX_G1_vc'
        }
    ]

  const userService = app.service("/users");
  await userService.remove(null);
  return Promise.all(users.map(user => userService.create(user)));
};

export default seed;
