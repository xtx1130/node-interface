'use strict';

const Router = require('koa-router');
const koabody = require('koa-body')();
const fs = require('fs');
const profiler = require('v8-profiler');
profiler.startProfiling('', true);
console.log('start')
setTimeout(() => {
    console.log('stop');
    let result = profiler.stopProfiling('');
    fs.writeFileSync('./node.cpu.json', JSON.stringify(result));
    result.delete();
}, 60 * 1000);
let testTryCatch = (req, res) => {
    try {
        res.end('tryCatchStatement success!');
    } catch (e) {
        res.end('tryCatchStatement ' + e.message);
    }
}
let testSleep = (req, res) => {
    const now = Date.now();
    while (Date.now() - now < 200) {}
    res.end('testSleep success');
}
let router = new Router();
router.get('/test', koabody, async (ctx, next) => {
	testTryCatch(ctx.req, ctx.res);
})

module.exports = router;