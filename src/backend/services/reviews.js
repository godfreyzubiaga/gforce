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

function setupReviewService(db) {
  const beforeHook = {};
  const afterHook = {
    // find : [populate({schema : userSchema})]
  };
  return setupService(db, "/api/reviews", "reviews", beforeHook, afterHook);
}

export default setupReviewService;