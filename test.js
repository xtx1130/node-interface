'use strict';
const testing = require('testing');

module.exports.test = callback => {
	let tests = {};
	let lib = 'testserver';
	tests[lib] = require('./test/'+lib + '.js').test;
	testing.run(tests, 4200, callback);
}
if (__filename == process.argv[1])
{
	exports.test(testing.show);
}