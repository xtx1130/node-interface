'use strict';
const http = require('http');
const Promise = require('bluebird');

let PromiseRequest = Promise.method(options => {
    return new Promise((resolve, reject) => { 
        var request = http.request(options, response => {
            var result = {
                'httpVersion': response.httpVersion,
                'httpStatusCode': response.statusCode,
                'headers': response.headers,
                'body': options.data||'',
                'trailers': response.trailers,
            };
            response.on('data', chunk => {
                result.body += chunk;
            });
            response.on('end', () => {
                resolve(result);
            });
        });
        request.on('error', error => {
            console.log('Problem with request:', error.message);
            reject(error);
        });
        request.end();
    });
});
module.exports = PromiseRequest;