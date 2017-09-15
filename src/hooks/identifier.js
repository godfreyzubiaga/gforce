function setData(obj1, obj2, field, comparator1, comparator2) {
	if ([field] instanceof Array) {
  obj2[field].forEach(doc => {
        if (doc[comparator1].toString() === obj1[comparator2].toString()) {
          const index = obj2[field].indexOf(doc);
					const copy = {...doc, [comparator2] : obj1};
          obj2[field][index] = copy;
        }
		});
	}
	else if (field instanceof Object) {
			if (obj1[comparator1] === obj2[comparator2]) {
				obj2[field] = {...obj2, [field] : obj1};
			}
	}
    // console.log(obj2)
}

function populateHook(api, array, comparator1, comparator2, params = {}) {
	return async function (hookDetails) {
		const prop = hookDetails.type === 'before' ? 'data' : 'result';
		const results = await hookDetails.app.service(api).find(params);
		// console.log(results)
		if (hookDetails[prop] instanceof Array) {
			hookDetails[prop].forEach(obj1 => {
				results.forEach(obj2 => {
					setData(obj2, obj1, array, comparator1, comparator2);
				})
			})
		}
		else if (hookDetails[prop] instanceof Object) {
			results.forEach(obj => {
				setData(obj, hookDetails[prop], array, comparator1, comparator2);
			});
		}
		return hookDetails;
	}
}

export default populateHook;