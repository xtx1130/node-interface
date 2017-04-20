'use strict';
const http = require('http');
const promiseHttp = require('./promiseHttp');
const url = require('url');
//promise.promisifyAll(http);
let func = (obj, ctx) => {
	ctx.body = ctx.body?ctx.body:'';
	return new Promise((reslove, reject) => {
		let para = obj.data;
		let method = obj.type ? obj.type : 'get';
		let uri = obj.url.match(/^http:\/\//) ? obj.url : 'http://' + obj.url;
		let host = url.parse(uri).host;
		let path = url.parse(uri).path;
		let options = {};
		let data = void 0;
		if(method=='get'){
			let params = '?' + para.replace('/,/', '&');
			let pathget = path + params;
			options={
				method: method,
				host: host,
				path: pathget
			}
		}else{
			options={
				method: method,
				host: host,
				path: path,
				data: JSON.stringify(para)
			}
		}
		let asy = async () => {
			var s = await promiseHttp(options);
			if(s.httpStatusCode==200)
				return JSON.parse(s.body);
			else 
				return s.body
		};
		asy().then(req => {
			ctx.body.push(req);
			reslove();
		}, err => {
			ctx.body.push(err);
			reject(err)
		});
	})
}
module.exports = func;