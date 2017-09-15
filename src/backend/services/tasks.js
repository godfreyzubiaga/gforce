import setupService from "./setupService";

function setupTaskService(db) {
  const beforeHook = {};
  const afterHook = {};
  return setupService(db, "/api/tasks", "tasks", beforeHook, afterHook);
}

export default setupTaskService;