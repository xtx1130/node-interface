'use strict';
const http = require('http');
const promiseHttp = require('./promiseHttp');
const url = require('url');
//promise.promisifyAll(http);
let func = (obj, ctx) => {
	ctx.body = ctx.body?ctx.body:'';
	return new Promise((reslove, reject) => {
		let params = '?' + obj.data.replace('/,/', '&');
		let uri = obj.url.match(/^http:\/\//) ? obj.url : 'http://' + obj.url;
		let host = url.parse(uri).host;
		let path = url.parse(uri).path + params;
		let method = obj.type ? obj.type : 'get';
		let asy = async () => {
			var s = await promiseHttp({
				method: method,
				host: host,
				path: path
			})
			return s.body;
		};
		asy().then(req => {
			ctx.body.push(JSON.parse(req));
			reslove();
		}, err => {
			ctx.body.push(err);
			reject(err)
		});
	})
}
module.exports = func;