import setupService from "./setupService";
import populateHook from '../../hooks/populate';
import { hooks } from 'feathers-authentication-local';

function setupUserService(db) {
  const beforeHook = {
    create: [
      hooks.hashPassword({ passwordField: 'password' }),
    ],
    update: [
      hooks.hashPassword({ passwordField: 'password' }),
    ],
    patch: [
      hooks.hashPassword({ passwordField: 'password' }),
    ],
  };
  const afterHook = {
    find: [populateHook('/api/bids', 'user', '_id', 'bids'),
     populateHook('/api/tasks', 'employer', '_id', 'tasks'),
     populateHook('/api/reviews', 'user', '_id', '')],
    get: [populateHook('/api/bids', 'user', '_id', 'bids'), populateHook('/api/tasks', 'employer', '_id', 'tasks')],
  };
  return setupService(db, "/users", "users", beforeHook, afterHook);
}

export default setupUserService;