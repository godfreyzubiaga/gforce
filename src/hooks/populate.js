const setData = async(specifiedData, service, foreignProp, localProp, nameAs) => {
  const data = specifiedData[localProp].toString();
  // const data = specifiedData[localProp];
  const queryItem = data instanceof Array ? { $in: data } : data;
  const foreignData = await service.find({
    query: {
      [`${foreignProp}`]: queryItem
    }
  });
  specifiedData[nameAs] = foreignData;
}

const populateHook = (serviceName, foreignProp, localProp, nameAs) => async(hook) => {
  const prop = hook.type === 'after' ? 'result' : 'data';
  let currentData = hook[prop];
  const service = await hook.app.service(serviceName);
  if (currentData instanceof Array) {
    await Promise.all(currentData.map(async(localData) =>
      await setData(localData, service, foreignProp, localProp, nameAs)
    ));
  } else if (currentData instanceof Object) {
    await setData(currentData, service, foreignProp, localProp, nameAs);
  }
  return Promise.resolve(hook);
}

export default populateHook;