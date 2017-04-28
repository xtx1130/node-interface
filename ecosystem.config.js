'use strict';
let env = process.env.NODE_ENV || 'development';
let watch = env==='development'?true:false;
let port = void 0;
for (let i in process.argv){
  if(process.argv[i].match('port'))
    port = process.argv[i].split('=')[1]||8083
}
module.exports = {
	apps:[{
		name:'interface',
		script:'./index.js',
		watch:watch,
		instance:1,
		log_date_format:'YYYY-MM-DD HH'
    //node_args: "port= "+"-- "+port
		//out_file:$HOME/.pm2/logs/XXXout.log,
	}]
}