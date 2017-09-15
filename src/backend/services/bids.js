import setupService from "./setupService";
import { populate } from 'feathers-hooks-common';

const userSchema = {
  include : {
    service : 'users',
    nameAs : 'user',
    parentField : 'user',
    childField : '_id'
  }
}

function setupBidService(db) {
  const beforeHook = {};
  const afterHook = {
    // find : [populate({schema : userSchema})]
  };
  return setupService(db, "/api/bids", "bids", beforeHook, afterHook);
}

export default setupBidService;