const testing = require('testing');
let testStartServer = callback =>{
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
	testing.run([testStartServer], 5000, callback);
};
if (__filename == process.argv[1]){
	exports.test(testing.show);
}