import createServer from "../backend/app";
import {ObjectId} from 'mongodb';

const seed = async () => {
  const app = await createServer();

    const tasks = [
        {
            _id : ObjectId('5995c5c438070f179c609451'),
            description : 'Wash Dishes',
            employer : ObjectId('5995c5c438070f179c609411'),
            dateIssued : new Date('2017-7-14'),
            minPrice : 300,
            maxPrice : 1000,
        }, 
        {
            _id : ObjectId('5995c5c438070f179c609452'),
            description : 'Do Laundry',
            employer : ObjectId('5995c5c438070f179c609411'),
            dateIssued : new Date('2017-8-11'),
            minPrice : 200,
            maxPrice : 500,
        },
        {
            _id : ObjectId('5995c5c438070f179c609453'),
            description : 'Buy Groceries',
            employer : ObjectId('5995c5c438070f179c609411'),
            dateIssued : new Date('2017-11-24'),
            minPrice : 450,
            maxPrice : 800,
        }
        
    ]

  const taskService = app.service("/api/tasks");
  await taskService.remove(null);
  return Promise.all(tasks.map(task => taskService.create(task)));
};

export default seed;
