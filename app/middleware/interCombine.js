'use strict';
const url = require('url');
const httpr = require('../deps/httpRequest');
let combine = async (ctx,next) => {
	ctx.body=[];
	try{
		let uri = url.parse(ctx.req.url);
		if(uri.pathname.match('apis')){
			let obj = ctx.request.body;
			for(let i in obj){
				var s = await httpr(obj[i],ctx);
			}
			ctx.status = 200
			await next();
		}else{
			await next();
		}
	}catch(e){
		throw e;
	}
}
module.exports = combine;