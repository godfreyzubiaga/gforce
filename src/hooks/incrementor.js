function assess(obj1, obj2, field1, field2, newProperty) {
    if (!obj2[newProperty]) {
        obj2[newProperty] = [];
    } 
    if (obj1[field1].toString() === obj2[field2].toString()) {
        const copy = {
            price : obj1.price,
            quantity : obj1.quantity,
            supplier : obj1.supplier
        }
        obj2[newProperty].push(copy);    
    }
}


function incrementorHook(api, newProperty, field1, field2, params = {}) {
    return async function(hookDetails) {
        const prop = hookDetails.type === 'before' ? 'data' : 'result';
        const results = await hookDetails.app.service(api).find(params);
        if (hookDetails[prop] instanceof Array) {
            hookDetails[prop].forEach(obj1 => {
                results.forEach(obj2 => {
                    assess(obj2, obj1, field1, field2, newProperty);
                });
            });
        }
        else if (hookDetails[prop] instanceof Object) {
            results.forEach(obj1 => {
                assess(obj1, hookDetails[prop], field1, field1, newProperty);
            })
        }
        return hookDetails;
    }
}

export default incrementorHook;