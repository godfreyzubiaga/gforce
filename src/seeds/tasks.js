import createServer from "../backend/app";
import { ObjectId } from 'mongodb';

const seed = async () => {
    const app = await createServer();

    const tasks = [
        {
            _id: ObjectId('5995c5c438070f179c609451'),
            description: 'Wash Dishes',
            employer: ObjectId('5995c5c438070f179c609411'),
            dateIssued: new Date('2017-7-14'),
            price: 700,
            lat: 10.7139343,
            lng: 122.5516674,
            name: 'Brent Anthony Tudas'
        },
        {
            _id: ObjectId('5995c5c438070f179c609452'),
            description: 'Do Laundry',
            employer: ObjectId('5995c5c438070f179c609411'),
            dateIssued: new Date('2017-8-11'),
            minPrice: 200,
            maxPrice: 500,
            lat: 10.7139453,
            lng: 122.5516734,
            name: 'Glyda Mae Torres'
        },
        {
            _id: ObjectId('5995c5c438070f179c609453'),
            description: 'Buy Groceries',
            employer: ObjectId('5995c5c438070f179c609411'),
            dateIssued: new Date('2017-11-24'),
            minPrice: 450,
            lat: 10.7139593,
            lng: 122.5516834,
            name: 'Li Arolf Rey'
        },
        {
            _id: ObjectId('5995c5c438070f179c609458'),
            description: 'Deliver Me Food',
            employer: ObjectId('5995c5c438070f179c609411'),
            dateIssued: new Date('2017-11-24'),
            price: 400,
            lat: 10.7139693,
            lng: 122.5516934,
            name: 'Anthony Davis'
        },

    ]

    const taskService = app.service("/api/tasks");
    await taskService.remove(null);
    return Promise.all(tasks.map(task => taskService.create(task)));
};

export default seed;
