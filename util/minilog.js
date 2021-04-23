const minilog = (obj) => {
  console.log('log', obj);
  console.info('info', obj);
  console.debug('debug', obj);
  console.warn('warn', obj);
  console.error('error', obj);
  console.exception('exception', obj);

  return obj;
}

module.exports = minilog;