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
 *@tips:后台必须restful接口规则，规则相应修改见app/deps/httpRequest line 34
**/
'use strict';
const koa = require('koa'); 
//const env = require('./config/index.js');
//middleware
const midentryLog = require('./app/middleware/entryLog');
const resErr = require('./app/controller/res.js');
const combine = require('./app/middleware/interCombine');
const apis = require('./app/routes/apis');
const otherRouter = require('./app/routes/useless');
const rootRouter = require('./app/routes/rootRouter');
//const v8Router = require('./app/routes/v8test');
const helmet = require('koa-helmet');
const app = new koa();
let args = process.argv.slice(2);
let port = (args[0] && /^\d+$/.test(args[0])) ? parseInt(args[0]) : 8031;

//app.use(helmet());
//错误日志
app.use(midentryLog);
//res 500 404 option等
app.use(resErr);
//app.use(v8Router.routes(), v8Router.allowedMethods());
app.use(rootRouter.routes(), rootRouter.allowedMethods());
app.use(otherRouter.routes(), otherRouter.allowedMethods());
app.use(apis.routes(), apis.allowedMethods());
app.use(combine);
app.use(async (ctx,next) => {
	try{
		ctx.body = JSON.stringify(ctx.body)||'{"status":"false"}';
		ctx.set('access-control-allow-origin',ctx.request.header['access-control-allow-origin']);
		ctx.set('access-control-allow-headers',ctx.request.header['access-control-allow-headers']);
		ctx.set('access-control-allow-methods',ctx.request.header['access-control-allow-methods']);
		ctx.set('Content-Type',ctx.request.header['content-type']||'text/html; charset=UTF-8');
		//ctx.set('Content-Length',Buffer.byteLength(ctx.body, 'utf8'));
		ctx.set('Via','nginx');
		await next();
	}catch(e){
		throw e;
	}
});
app.listen(port);
console.log(`Server up and running! On port ${port}!`);