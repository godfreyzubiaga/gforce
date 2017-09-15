function setData() {

}

function identifierHook(api, comparator1, comparator2, params = {}) {
    return async function(hookDetails) {
        const prop = (hookDetails.type === 'before') ? 'data' : 'result';
        const results = await hookDetails.app.service(api).find(params);
        if (hookDetails[prop] instanceof Array) {
            hookDetails[prop]
        }
        else if (hookDetails[prop] instanceof Object) {

        }

        return hookDetails;
    }
}