import { observable, runInAction } from 'mobx';
import { ObjectId } from 'mongodb';
import app from '../client';

class TaskStore {

    @observable tasks = [];
    @observable bids = [];
    @observable users = [];
    userService;
    taskService;
    bidService;

    constructor() {
        this.initialize();
        this.fetchUsers();
        this.fetchTasks();
        this.fetchBids();
    }

    initialize() {
        this.userService = app.service('/users');
        this.taskService = app.service('/api/tasks');
        this.bidService = app.service('/api/bids');

        this.taskService.on('created', newTask => {
            this.tasks.push(newTask);
        });
        this.bidService.on('created', newBid => {
            this.bids.push(newBid);
        })
    }

    async fetchTasks() {
        this.tasks = await this.taskService.find();
    }

    async fetchBids() {
        this.bids = await this.bidService.find();
    }

    async fetchUsers() {
        this.users = await this.userService.find();
    }

    async bid(userId, task, price) {
        const data = {
            taskId : task._id,
            user : userId,
            price,
            date : new Date(Date.now())
        };
        await this.bidService.create(data);
    }

    async postTask(description, minPrice, maxPrice) {
        const data = {
            description,
            employer : ObjectId('5995c5c438070f179c609413'),
            maxPrice,
            minPrice,
            dateIssued : new Date(Date.now())
        };
        await this.taskService.create(data);
    }
}