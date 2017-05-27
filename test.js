'use strict';
const testing = require('testing');
const mekoa = require('./index');
module.exports.test = callback => {
	let tests = {};
	let lib = 'testserver';
	let dem = 'server';
	tests[lib] = require('./test/'+lib + '.js').test;
	tests[dem] = require('./index').test;
	testing.run(tests, 4200, callback);
}
if (__filename == process.argv[1])
{
	exports.test(testing.show);
}