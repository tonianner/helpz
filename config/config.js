var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'helpz'
    },
    port: 3000,
    db: 'mongodb://localhost/helpz-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'helpz'
    },
    port: 3000,
    db: 'mongodb://localhost/helpz-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'helpz'
    },
    port: process.env.PORT || 3000,
    db: process.env.MONGOLAB_URI ||'mongodb://localhost/helpz-production'
  }
};

module.exports = config[env];
