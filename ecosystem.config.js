'use strict';
let env = process.env.NODE_ENV || 'development';
let watch = env==='development'?true:false;
module.exports = {
	apps:[{
		name:'interface',
		script:'./index.js',
		watch:watch,
		instance:1,
		log_date_format:'YYYY-MM-DD HH'
		//out_file:$HOME/.pm2/logs/XXXout.log,
	}]
}