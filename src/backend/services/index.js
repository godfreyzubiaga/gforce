import authentication from './authentication';
import bidService from './bids';
import taskService from './tasks';
import userService from './users';


function setupAllServices(db) {
  return function execute() {
    const app = this;
    app
      .configure(authentication())
      .configure(userService(db))
      .configure(bidService(db))
      .configure(taskService(db))

  };
}

export default setupAllServices;