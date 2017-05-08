'use strict';

const Router = require('koa-router');
const getRoute = require('../deps/getRoute');
let router = new Router();
router.get('/:id', async (ctx, next) => {
	ctx.status = 404
	throw new Error('page not find!')
})
router.post('/:id', async (ctx, next) => {
	ctx.status = 404
	throw new Error('page not find!')
})
module.exports = router;