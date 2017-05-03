'use strict';
const getRoute = require('../deps/getRoute');
const httpr = require('../deps/httpRequest');
let combine = async (ctx,next) => {
	ctx.body=[];
	try{
		if(ctx.path==='/apis'){
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