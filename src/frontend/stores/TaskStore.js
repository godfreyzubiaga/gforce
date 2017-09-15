import { observable, runInAction, action } from 'mobx';

export default class TaskStore {
    @observable tasks = [];
    @observable bids = [];
    @observable users = [];
    @observable transactions = [];
    @observable values = {
      taskName: '',
      description: '',
      budget: '',
    }
    userService;
    taskService;
    bidService;
    bankService;

    constructor(rootStore, app) {
        this.store = rootStore;
        this.app = app;
        this.initialize();
        this.fetchUsers();
        this.fetchTasks();
        this.fetchBids();
    }

    initialize() {
        this.userService = this.app.service('/users');
        this.taskService = this.app.service('/api/tasks');
        this.bidService = this.app.service('/api/bids');
        this.bankService = this.app.service('/api/bank');
        this.taskService.on('created', newTask => {
            this.tasks.push(newTask);
        });
        this.bidService.on('created', newBid => {
            this.bids.push(newBid);
            console.log(newBid, ' da new bid')
        });
        this.bankService.on('created', newAccount => {
            console.log(newAccount, ' new Account');
        });
    }

    @action.bound setValue(event) {
      this.values[event.target.id] = event.target.value;
    }

    async fetchTasks() {
        this.tasks = await this.taskService.find();
        console.log(this.tasks, ' da tankss')
    }

    async fetchBids() {
        this.bids = await this.bidService.find();
    }

    async fetchUsers() {
        this.users = await this.userService.find();
    }
    @action.bound
    async bid(userId, task, price) {
        const data = {
            taskId: task._id,
            user: userId,
            price,
            date: new Date(Date.now())
        };
        console.log(data, ' da data')
        await this.bidService.create(data);
    }

    @action.bound
    async postTask(event) {
        event.preventDefault();
        this.values.dateAdded = new Date();
        try {
          await this.taskService.create(this.values);
          alert('Task added successfully!');
        } catch (e) {
          alert('There was an error in submitting the task, please try again.');
        }
    }
}
