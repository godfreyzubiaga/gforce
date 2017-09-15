import createServer from "../backend/app";
import { ObjectId } from 'mongodb';

const seed = async () => {
    const app = await createServer();

    const tasks = [
        {
            _id: ObjectId('5995c5c438070f179c609451'),
            description: 'Wash Dishes',
            employer: '5995c5c438070f179c609411',
            dateIssued: new Date('2017-7-14'),
            price: 700,
            lat: 10.712358,
            lng: 122.541568,
            name: 'Brent Anthony Tudas',
            active: true,
            image: 'https://i.pinimg.com/736x/1f/41/6d/1f416d98179f0c22180e98ca9ab6d697--mens-hairstyles-hot-pink.jpg',
        },
        {
            _id: ObjectId('5995c5c438070f179c609452'),
            description: 'Do Laundry',
            employer: '5995c5c438070f179c609411',
            dateIssued: new Date('2017-8-11'),
            price: 500,
            lat: 10.715141,
            lng: 122.544916,
            name: 'Glyda Mae Torres',
            active: true,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSA2C6Fzcu0ke2UPXdBJQ8jzRSHvVNlBZ09aJnuicpbE3JskmXX_G1_vc',
        },
        {
            _id: ObjectId('5995c5c438070f179c609453'),
            description: 'Buy Groceries',
            employer: '5995c5c438070f179c609411',
            dateIssued: new Date('2017-11-24'),
            price: 300,
            lat: 10.715472,
            lng: 122.545388,
            name: 'Li Arolf Rey',
            active: true,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xxGmekR7YkpfXgN_uexg_7gT6pLHwY4jNSiHEflViLM1K0ec',
        },
        {
            _id: ObjectId('5995c5c438070f179c609458'),
            description: 'Deliver Me Food',
            employer: '5995c5c438070f179c609411',
            dateIssued: new Date('2017-11-24'),
            price: 400,
            lat: 10.714313,
            lng: 122.546108,
            name: 'Anthony Davis',
            active: true,
            image: 'https://i.pinimg.com/736x/1f/41/6d/1f416d98179f0c22180e98ca9ab6d697--mens-hairstyles-hot-pink.jpg',
        },

    ]

    const taskService = app.service("/api/tasks");
    await taskService.remove(null);
    return Promise.all(tasks.map(task => taskService.create(task)));
};

export default seed;
