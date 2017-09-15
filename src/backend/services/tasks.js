import setupService from "./setupService";
import populateHook from '../../hooks/populate';


function setupTaskService(db) {
  const beforeHook = {};
  const afterHook = {
    // find : [identifierHook('/api/bids', 'bids', 'taskId', '_id')],
    // get : [identifierHook('/api/bids', 'bids', '_id', 'taskId')],
    find : [populateHook('/api/bids', 'taskId', '_id', 'bids')]
  };
  return setupService(db, "/api/tasks", "tasks", beforeHook, afterHook);
}

export default setupTaskService;