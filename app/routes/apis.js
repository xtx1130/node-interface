'use strict';

const Router = require('koa-router');
const koabody = require('koa-body')();
let router = new Router();
router.get('/apis', koabody, async (ctx, next) => {
	await next()
})
router.post('/apis', koabody, async (ctx, next) => {
	await next()
})

module.exports = router;