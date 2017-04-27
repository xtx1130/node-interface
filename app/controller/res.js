'use strict';
let midres = async (ctx, next) => {
	try {
		if (ctx.request.method == "OPTIONS") {
	    	ctx.response.status = 200
	  	}
		await next()
	} catch (e) {
		let status = ctx.status || 500;
		let message = e.message || '服务器错误';
		ctx.body = message;
		ctx.status = status;
		ctx.set('Content-Type','text/html;charset=UTF-8');
		throw e;

	}
}
module.exports = midres;