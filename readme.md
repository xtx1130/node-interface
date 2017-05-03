# node-interface   
[![NPM](https://nodei.co/npm/node-interface.png?compact=true)](https://nodei.co/npm/node-interface/)  
[![Package Quality](http://npm.packagequality.com/shield/node-interface.svg)](http://packagequality.com/#?package=node-interface)
[![Build Status](https://travis-ci.org/xtx1130/node-interface.svg?branch=master)](https://www.npmjs.com/package/node-interface)
[![npm (tag)](https://img.shields.io/npm/v/npm/next.svg)](https://www.npmjs.com/package/node-interface)
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)]()
> middle ware for front-engineer to server

## simple server for api merge

### usage:

```bash
npm install node-interface  
cd ./node-interface  
sudo npm install
```

```bash
sh ./bin/start.sh n (n means how many ports will be listened(8030+n))
```

### examples:

```js
$.ajax({
	url:'http://127.0.0.1:8031',
	type:'post',
	data:{
		0:{
			url:'http://url',
			type:'get',
			data:'uId=1'//use key=value&key=value, beacuse this is get method
		},
		1:{
			url:'http://url',
			type:'post',
			data:{uId:1}//use object , because this is post method
		}
	},
	success:function(data){
		console.log(JSON.parse(data))//the data is an Array ,and it include [data[0],data[1]]
	}
})
```
+ node-interface will help you to request data[0].url && data[1].url and merge the response return back to users

+ The success data has contained data[0]&data[1] result;

+ server client must has restful API status to ensure node can check，API status changes in ./app/deps/httpRequest line 34

### 1.0.0 version 

+ project established

### 1.1.0 version

+ add testing

### 1.3.0 version

+ add post method

### 1.5.0 version

+ add other routers for 404,only /apis can be readed
+ add start.sh to establish pm2 cluster usage: sh start.sh + n (n means how many ports will get start)

### 1.7.3 version

+ change readme
+ add koa-helmet(has been noted in index.js)

### issues

+ add issues in [here](https://github.com/xtx1130/node-interface/issues "issue") 
 
### License

+ MIT