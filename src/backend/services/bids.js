import setupService from "./setupService";

function setupBidService(db) {
  const beforeHook = {};
  const afterHook = {};
  return setupService(db, "/api/bids", "bids", beforeHook, afterHook);
}

export default setupBidService;