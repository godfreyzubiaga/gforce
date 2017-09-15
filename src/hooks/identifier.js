function setData(obj1, obj2, comparator1, comparator2) {
    if (obj1[comparator1].toString() === obj2[comparator2].toString()) {
        obj1[comparator1] = obj2;
        console.log(obj1[comparator1], ' obj1 field')
    }
}

export default function identifierHook(api, comparator1, comparator2, params = {}) {
    return async function(hookDetails) {
        const prop = (hookDetails.type === 'before') ? 'data' : 'result';
        const results = await hookDetails.app.service(api).find(params);
        if (hookDetails[prop] instanceof Array) {
            hookDetails[prop].forEach(obj1 => {
                results.forEach(obj2 => {
                    setData(obj1, obj2, comparator1, comparator2)
                })
            })
        }
        else if (hookDetails[prop] instanceof Object) {
            results.forEach(obj2 => {
                setData(hookDetails[prop], obj2, comparator1, comparator2);
            })
        }

        return hookDetails;
    }
}