# node-interface

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

```bash
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
