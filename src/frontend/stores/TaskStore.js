import { observable, runInAction, action, computed } from 'mobx';

export default class TaskStore {
  @observable tasks = [];
  @observable bids = [];
  @observable users = [];
  @observable transactions = [];
  @observable currentTask;
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
    this.fetchTasks();
    this.fetchBids();
    this.fetchUsers();
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

  @computed get currentTasks () {
    return this.tasks.filter(task => task.employeeId === this.store.userStore.currentUser._id);
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

  @action.bound async bid(userId, task) {
    const data = {
      taskId: task._id,
      user: userId,
      price: task.price,
      date: new Date(Date.now())
    };

    await this.bidService.create(data);
    this.store.viewStore.setModalView(false);
  }

  @action.bound async postTask(event) {
    event.preventDefault();
    this.values.dateIssued = new Date();
    this.values.active = true;
    this.store.locationStore.getCoordinates();
    this.values.lng = this.store.locationStore.coordinates.longitude;
    this.values.lat = this.store.locationStore.coordinates.latitude;
    this.values.employerName = this.store.userStore.currentUser.name;
    this.values.image = this.store.userStore.currentUser.image;
    const res = await this.taskService.create(this.values);
    this.addTask(res);
    alert('You created a task for people to see!');
    try {
      await this.taskService.create(this.values);
      alert('Task added successfully!');
    } catch (e) {
      alert('There was an error in submitting the task, please try again.');
    }
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

  @action.bound addTask(task) {
    this.tasks.push(task);
  }

  @computed get activeTasks() {
    return this.tasks.filter(task => task.active);
  }

  @computed get activeTasksLength() {
    return this.tasks.length;
  }
}