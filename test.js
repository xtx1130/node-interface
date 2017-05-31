'use strict';
const testing = require('testing');
const mekoa = require('./index');
module.exports.test = callback => {
	let tests = {};
	let lib = 'testserver';
	let dem = 'server';
	let promise = 'promise';
	tests[lib] = require('./test/'+lib + '.js').test;
	tests[dem] = require('./index').test;
	//tests[promise] = require('./app/deps/httpRequest').test;
	testing.run(tests, 4200, callback);
}
exports.test(testing.show);