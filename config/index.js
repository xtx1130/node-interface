'use strict';
const development_env = require('./dev');
const test_env = require('./test');
module.exports = {
    development: development_env,
    test: test_env
}[process.env.NODE_ENV || 'development']