import { observable, runInAction, action } from 'mobx';

export default class TaskStore {
  @observable tasks = [];
  @observable bids = [];
  @observable users = [];
  @observable transactions = [];
  @observable currentTask;
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

  async postTask(description, minPrice, maxPrice) {
    const data = {
      description,
      employer: '5995c5c438070f179c609413',
      maxPrice,
      minPrice,
      dateIssued: new Date(Date.now()),
      image : this.store.userStore.currentUser.image
    };
    console.log(this.store.userStore, ' da user store')
    await this.taskService.create(data);
  }

  @action.bound onModalClick(task) {
    console.log(task);
    this.store.viewStore.setModalView(true);
    this.setCurrentTask(task);
    console.log(this.currentTask);
    console.log(this.store.userStore.currentUser, ' da curent user')
    
  }

  @action.bound setCurrentTask(task) {
    this.currentTask = task;
  }
}
