const http = require('http');
const fs = require('fs');
const path = require('path');
const { readFile } = require('./node-file/file');

const hostName = "localhost";
const port = 3000;

http.createServer((req, res) => {
    console.log(req.headers);

    const fileName = 'index.html';

    if (req.method == 'GET') {
        let fileUrl;
        if (req.url === '/') fileUrl = 'index.html';
        else fileUrl = req.url;
        const filePath = path.resolve('./node-file/' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt === '.html') {
            readFile(filePath)
                .then(data => {
                    res.setHeader('Content-Type', 'text/html');
                    res.statusCode = 200;
                    console.log(`file: ${data}`);
                    res.end(data);
                })
                .catch(err => {
                    console.error(`Error reading file:`, err);
                    res.statusCode = 500;
                    res.end('Internal Server Error');
                });
        }
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`
            <html>
            <body>
            <h1>Error 404 ${req.method} not supported</h1>
            </body>
            </html>
            `);
    }

    // readFile(fileName)
    //     .then(_ => {
    //         res.setHeader('Content-Type', 'text/html');
    //         res.statusCode = 200;
    //         fs.createReadStream(fileName).pipe(res);
    //     })
    //     .catch(err => {
    //         console.error(`Error reading file:`, err);
    //         res.statusCode = 500;
    //         res.end('Internal Server Error');
    //     });
}).listen(port);

console.log(`Server running at http://${hostName}:${port}/`);