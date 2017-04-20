'use strict';
const path = require('path');
const fs = require('fs');
let isexist = void 0;

let errorLogPath = path.resolve(__dirname, "../logs/error");
isexist = fs.existsSync('../logs');
if(!isexist){
    fs.mkdirSync('../logs','0777');
}
let responseLogPath = path.resolve(__dirname, "../logs/reponse");
module.exports = {
    "appenders":
    [
        {
            "category":"errorLogger",             //logger名称
            "type": "dateFile",                   //日志类型
            "filename": errorLogPath,             //日志输出位置
            "alwaysIncludePattern":true,          //是否总是有后缀名
            "pattern": "-yyyy-MM-dd-hh.log"       //后缀，每小时创建一个新的日志文件
        },
        {
            "category":"resLogger",
            "type": "dateFile",
            "filename": responseLogPath,
            "alwaysIncludePattern":true,
            "pattern": "-yyyy-MM-dd-hh.log"
        }
    ],
    "levels":                                     //设置logger名称对应的的日志等级
    {
        "errorLogger":"ERROR",
        "resLogger":"ALL"
    }
}