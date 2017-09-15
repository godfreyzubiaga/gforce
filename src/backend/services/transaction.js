import setupService from "./setupService";
import populateHook from '../../hooks/populate';

function setupTransactionService(db) {
  const beforeHook = {};
  const afterHook = {};
  return setupService(db, "/api/transactions", "transactions", beforeHook, afterHook);
}

export default setupTransactionService;
