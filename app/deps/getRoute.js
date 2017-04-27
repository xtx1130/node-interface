'use strict';

const url = require('url');

let func = (uri) => url.parse(uri).pathname;

module.exports = func;