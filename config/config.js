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
    port: 3000,
    db: 'mongodb://heroku_585ksbg7:1f7ii1jvh02mt46ni1nrqnal3q@ds057204.mongolab.com:57204/heroku_585ksbg7'
  }
};

module.exports = config[env];
