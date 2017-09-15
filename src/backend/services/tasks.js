import setupService from "./setupService";
import populateHook from '../../hooks/populate';
import identifierHook from '../../hooks/identifier';

function setupTaskService(db) {
  const beforeHook = {};
  const afterHook = {
    // find : [identifierHook('/api/bids', 'bids', 'taskId', '_id')],
    // get : [identifierHook('/api/bids', 'bids', '_id', 'taskId')],
    find : [populateHook('/api/bids', 'taskId', '_id', 'bids'),],
    get : [populateHook('/api/bids', 'taskId', '_id', 'bids'),],
    // find : [populateHook('/api/bids', 'taskId', '_id', 'bids'), identifierHook('/users', 'employer', '_id')],
    // get : [populateHook('/api/bids', 'taskId', '_id', 'bids'), identifierHook('/users', 'employer', '_id')],
  };
  return setupService(db, "/api/tasks", "tasks", beforeHook, afterHook);
}

export default setupTaskService;