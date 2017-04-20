'use strict';
const testing = require('testing');

module.exports.test = callback => {
	let tests = {};
	let libs = 'index';
	tests[lib] = require(lib + '.js').test;
	testing.run(tests, 4200, callback);
}
if (__filename == process.argv[1])
{
	exports.test(testing.show);
}