import setupService from "./setupService";
import populateHook from '../../hooks/populate';

function setupUserService(db) {
  const beforeHook = {};
  const afterHook = {
    find : [populateHook('/api/bids', 'user', '_id', 'bids'), populateHook('/api/tasks', 'employer', '_id', 'tasks')],
    get : [populateHook('/api/bids', 'user', '_id', 'bids'), populateHook('/api/tasks', 'employer', '_id', 'tasks')],
  };
  return setupService(db, "/users", "users", beforeHook, afterHook);
}

export default setupUserService;