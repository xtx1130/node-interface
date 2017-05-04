'use strict';
const http = require('http');
const Promise = require('bluebird');

let PromiseRequest = Promise.method(options => {
    return new Promise((resolve, reject) => {
        let request = http.request(options, response => {
            let chunks = [];
            response.on('data', chunk => {
                chunks.push(chunk);
            });
            response.on('end', () => {
                let result = {
                    'httpVersion': response.httpVersion,
                    'httpStatusCode': response.statusCode,
                    'headers': response.headers,
                    'body': Buffer.concat(chunks) || '',
                    'trailers': response.trailers,
                };
                resolve(result);
            });
        });
        request.on('error', error => {
            console.log('Problem with request:', error.message);
            reject(error);
        });
        if (options.timeout) {
            request.setTimeout(options.timeout, () => {
                request.abort();
            })
        }
        request.end();
    });
});
module.exports = PromiseRequest;
