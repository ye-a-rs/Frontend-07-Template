const http = require('http')

http.createServer((req, res) => {
  let body = []
  req.on('error', err => {
    console.error(err);
  }).on('data', chunk => {
    body.push(chunk.toString())
  }).on('end', () => {
    body = Buffer.concat(body).toString()
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('This is the world')
  })
}).listen(8080)