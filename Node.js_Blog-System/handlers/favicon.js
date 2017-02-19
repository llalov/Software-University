let url = require('url')
let fs = require('fs')

module.exports = (req, res) => {
  req.path = req.path || url.parse(req.url).pathname
  if (req.path === '/favicon' || req.path === '/favicon.ico') {
    fs.readFile('./content/favicon.ico', (err, data) => {
      if (err) throw err
      res.writeHead(200)
      res.write(data)
      res.end()
    })
  } else {
    return true
  }
}
