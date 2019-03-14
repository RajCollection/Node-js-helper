const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs')

const server = http.createServer((req, res) => {

    if(req.url == '/'){
            fs.readFile(path.join(__dirname, 'form.html'), (err, content) => {
                if(err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html'})
                res.end(content)
            })
        }
    var query = url.parse(req.url,true).query;
    console.log(query)
    res.end(JSON.stringify(query));
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server running on port 5000'));