import createServer from "../backend/app";
import {ObjectId} from 'mongodb';

const seed = async () => {
  const app = await createServer();

    const bids = [
        {
            _id : ObjectId('5995c5c438070f179c609423'),
            taskId : ObjectId('5995c5c438070f179c609451'),
            user : ObjectId('5995c5c438070f179c609411'),
            price : 500,
            date : new Date('August 8, 2017 03:24:00')
        },
        {
            _id : ObjectId('5995c5c438070f179c609424'),
            taskId : ObjectId('5995c5c438070f179c609451'),
            user : ObjectId('5995c5c438070f179c609412'),
            price : 400,
            date : new Date('August 8, 2017 04:24:00')
        },
        {
            _id : ObjectId('5995c5c438070f179c609425'),
            taskId : ObjectId('5995c5c438070f179c609452'),
            user : ObjectId('5995c5c438070f179c609411'),
            price : 300,
            date : new Date('September 12, 2017 04:24:00')
        },
        {
            _id : ObjectId('5995c5c438070f179c609426'),
            taskId : ObjectId('5995c5c438070f179c609453'),
            user : ObjectId('5995c5c438070f179c609412'),
            price : 500,
            date : new Date('December 25, 2017 04:24:00')
        } 
        
    ]

  const bidService = app.service("/api/bids");
  await bidService.remove(null);
  return Promise.all(bids.map(bid => bidService.create(bid)));
};

export default seed;
