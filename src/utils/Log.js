const Log = (name = 'log', vars) => {
  console.log(name, vars);
  return ``;
}

export const LOG_IT = (name = 'logit', callback) => {
  console.log(name, callback);
  return callback();
}

export default Log;