/**
 *@description 合并ajax请求 请求格式eg:
 *@author xtx1130
 *@example:
	$.ajax({
		url:'http://127.0.0.1:8086',
		type:'post',
		data:{
			0:{
				url:'http://url',
				type:'get',
				data:'qipuId=1'
			},
			1:{
				url:'http://url',
				type:'get',
				data:'qipuId=1'
			}
		},
		success:function(data){
			console.log(JSON.parse(data))
		}
	})
**/
'use strict';
const koa = require('koa'); 
const env = require('./config/index.js');
const port = env.port||'8087';
const Router = require('koa-router');
let router = new Router();
//middleware
const midentryLog = require('./app/middleware/entryLog');
const resErr = require('./app/controller/res.js');
const combine = require('./app/middleware/interCombine');
const apis = require('./app/routes/apis');
const app = new koa();
//错误日志
app.use(midentryLog);
//res 500 404等
app.use(resErr);
router.use(apis.routes(), apis.allowedMethods());
app.use(router.routes(), router.allowedMethods());
app.use(combine);
app.use(async (ctx,next) => {
	try{
		ctx.body = JSON.stringify(ctx.body);
		ctx.set('access-control-allow-origin',ctx.request.header['access-control-allow-origin']);
		ctx.set('access-control-allow-headers',ctx.request.header['access-control-allow-headers']);
		ctx.set('access-control-allow-methods',ctx.request.header['access-control-allow-methods']);
		ctx.set('content-type',ctx.request.header['content-type']);
		ctx.set('Via','nginx');
		await next();
	}catch(e){
		throw e;
	}
});
app.listen(port);
console.log(`Server up and running! On port ${port}!`)