'use strict';

const Router = require('koa-router');
const getRoute = require('../deps/getRoute');
let router = new Router();
router.get('/', async (ctx, next) => {
	if(getRoute(ctx.req.url)==='/apis'){
		await next();
	}else{
		ctx.status = 404
		throw new Error('look me at <a href="//github.com/xtx1130" target="_blank">xtx1130</a>')
	}
})
router.post('/', async (ctx, next) => {
	if(getRoute(ctx.req.url)==='/apis'){
		await next();
	}else{
		ctx.status = 404
		throw new Error('look me at <a href="//github.com/xtx1130" target="_blank">xtx1130</a>')
	}
})
module.exports = router;