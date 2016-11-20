let url = require('url')
let fs = require('fs')

module.exports = (req, res) => {
  req.path = req.path || url.parse(req.url).pathname
  if (req.path.startsWith('/content')) {
    fs.readFile('.' + req.path, (err, data) => {
      if (err) {
        return true
      }

      res.writeHead(200)
      res.write(data)
      res.end()
    })
  }
}
