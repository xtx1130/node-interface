const testing = require('testing');
const koa = require('koa');
let app = new koa();
let testKoaServer = callback =>{
	let options = {
		port: 10530,
	};
	let server = app.listen(options.port)
	server.close(function(error){
		testing.check(error, 'Could not stop server', callback);
		testing.success(callback);
	});
}
exports.test = callback => {
	testing.run([testKoaServer], 5000, callback);
};
if (__filename == process.argv[1]){
	exports.test(testing.show);
}