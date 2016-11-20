let url = require('url')
let fs = require('fs')

module.exports = (req, res) => {
  req.path = req.path || url.parse(req.url).pathname
  if (req.path === '/' || req.path === '' || req.path === '/index') {
    fs.readFile('./views/index.html', (err, data) => {
      if (err) throw err
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data)
      res.end()
    })
  } else {
    return true
  }
}
