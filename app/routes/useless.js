'use strict';

const Router = require('koa-router');
const getRoute = require('../deps/getRoute');
let router = new Router();
router.get('/', '/:id', async (ctx, next) => {
	console.log(getRoute(ctx.req.url))
	if(getRoute(ctx.req.url)==='/apis'){
		await next();
	}else{
		ctx.status = 404
		throw new Error('page not find!')
	}
})
router.post('/', '/:id', async (ctx, next) => {
	if(getRoute(ctx.req.url)==='/apis'){
		await next();
	}else{
		ctx.status = 404
		throw new Error('page not find!')
	}
})
module.exports = router;