import createServer from "../backend/app";
import {ObjectId} from 'mongodb';

const seed = async () => {
  const app = await createServer();

    const reviews = [
        {
            _id : ObjectId('5995c5c438070f179c609423'),
            user : '5995c5c438070f179c609411',
            description : 'Nami nami serbisyo ya',
            date : new Date('August 8, 2017 03:24:00')
        },
        {
            _id : ObjectId('5995c5c438070f179c609425'),
            user : '5995c5c438070f179c609411',
            description : 'Hire ko ni siya liwat ah',
            date : new Date('August 9, 2017 03:24:00')
        }
    ]

  const reviewService = app.service("/api/reviews");
  await reviewService.remove(null);
  return Promise.all(reviews.map(review => reviewService.create(review)));
};

export default seed;
