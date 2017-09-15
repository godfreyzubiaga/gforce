import createServer from "../backend/app";
import {ObjectId} from 'mongodb';

const seed = async () => {
  const app = await createServer();

    const accounts = [
        {
            _id : ObjectId('5995c5c438070f179c609423'),
            accountNo : 100918082816,
            user : ObjectId('5995c5c438070f179c609411'),
            ammount : 100000,
            date : new Date('August 8, 2017 03:24:00')
        },
        {
            _id : ObjectId('5995c5c438070f179c609424'),
            accountNo : 100918082817,
            user : ObjectId('5995c5c438070f179c609411'),
            ammount : 50000,
            date : new Date('August 11, 2017 03:24:00')
        }        
    ]

  const bankService = app.service("/api/bank");
  await bankService.remove(null);
  return Promise.all(accounts.map(account => bankService.create(account)));
};

export default seed;
