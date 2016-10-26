const config = {
  development: {
    name: 'development',
    socketEndpointURI: null
  },
  production: {
    name: 'production',
    socketEndpointURI: null
  }
};

module.exports = function(env) {
  return JSON.stringify(config[env] || config.development);
};
