const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;

http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './index.html';
    }

    let extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
        case '.json': contentType = 'application/json'; break;
        case '.png': contentType = 'image/png'; break;      
        case '.jpg': contentType = 'image/jpg'; break;
    }

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                res.writeHead(404);
                res.end('File Not Found');
            } else {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}).listen(PORT);
console.log(`Server running at http://127.0.0.1:${PORT}/`);
