function transformHook(ModelClass) {
	return function execute(hookDetails) {
		const prop = hookDetails.type === 'before' ? 'data' : 'result';
		if (hookDetails[prop] instanceof Array) {
			hookDetails[prop] = hookDetails[prop].map(obj => {
				return new ModelClass(obj);
			});
		}
		else if (hookDetails[prop] instanceof Object) {
			hookDetails[prop] = new ModelClass(hookDetails[prop]);
		}
		else {
			return Promise.reject(new Error('Invalid data type given.'));
		}
		return hookDetails;
	}
}

export default transformHook;