/**
 *@file index.js
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
const res = require('./app/controller/res.js');
const combine = require('./app/middleware/interCombine');
const apis = require('./app/routes/apis');
const otherRouter = require('./app/routes/useless');
const rootRouter = require('./app/routes/rootRouter');
//const v8Router = require('./app/routes/v8test');
const helmet = require('koa-helmet');
const testing = require('testing');
const app = new koa();
let args = process.argv.slice(2);
let port = (args[0] && /^\d+$/.test(args[0])) ? parseInt(args[0]) : 8031;
//app.use(helmet());
//错误日志
let middleWare = [midentryLog,res,apis.routes(),combine,rootRouter.routes(),otherRouter.routes()];
let regester = (arg) => {
	arg.forEach(fn=>app.use(fn))
}
regester(middleWare)
// app.use(midentryLog);
// //res 500 404 200 option 以及跨域头
// app.use(res);
// //app.use(v8Router.routes(), v8Router.allowedMethods());
// app.use(apis.routes());
// app.use(apis.allowedMethods())
// app.use(combine);
// app.use(rootRouter.routes());
// app.use(rootRouter.allowedMethods());
// app.use(otherRouter.routes());
// app.use(otherRouter.allowedMethods())
app.listen(port);


//testing
let testStartServer = callback =>{
	let options = {
		port: 10531,
	};
	regester(middleWare)
	let server = app.listen(options.port)
	server.close(function(error){
		testing.check(error, 'Could not stop server', callback);
		testing.success(callback);
	});
}
if (__filename == process.argv[1])
{
	exports.test(testing.show);
}
module.exports.test = callback => {
	testing.run([testStartServer], 5000, callback);
};
console.log(`Server up and running! On port ${port}!`);