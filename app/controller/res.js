'use strict';
let midres = async (ctx, next) => {
	try {
		if (ctx.request.method == "OPTIONS") {
	    	ctx.response.status = 200
	  	}else{
	  		await next();
			ctx.body = JSON.stringify(ctx.body)||'{"status":"false"}';
			ctx.set('access-control-allow-origin',ctx.request.header['access-control-allow-origin']);
			ctx.set('access-control-allow-headers',ctx.request.header['access-control-allow-headers']);
			ctx.set('access-control-allow-methods',ctx.request.header['access-control-allow-methods']);
			ctx.set('Content-Type',ctx.request.header['content-type']||'text/html; charset=UTF-8');
			//ctx.set('Content-Length',Buffer.byteLength(ctx.body, 'utf8'));
			ctx.set('Via','nginx');
	  	}
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