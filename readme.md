[![NPM](https://nodei.co/npm/node-interface.png?compact=true)](https://nodei.co/npm/node-interface/)

# node-interface 
[![Build Status](https://travis-ci.org/xtx1130/node-interface.svg?branch=master)](https://www.npmjs.com/package/node-interface)
[![npm (tag)](https://img.shields.io/npm/v/npm/next.svg)](https://www.npmjs.com/package/node-interface)
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)]()
> middle ware for front-engineer to server

## simple server for api merge

### usage:

```bash
npm install node-interface
```

```bash
node index.js
```

### examples:

```js
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
```
+ The success data has contained data[0]&data[1] result;

### 1.0.0 version 

+ project established

### 1.1.0 version

+ add testing