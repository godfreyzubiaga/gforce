import setupService from "./setupService";

function setupUserService(db) {
  const beforeHook = {};
  const afterHook = {};
  return setupService(db, "/users", "users", beforeHook, afterHook);
}

export default setupUserService;