let url = require('url')
let db = require('../data/db.js')
let query = require('querystring')

module.exports = (req, res) => {
  req.path = req.path || url.parse(req.url).pathname
  let queryData = url.parse(req.url, true).query
  if (req.path === '/details-comment' && req.method === 'POST') {
    let searchedId = queryData.id
    let articleExists = false
    let body = ''
    for (let article of db) {
      if (article.id === searchedId) {
        articleExists = true
        req.on('data', (data) => { body += data })
        req.on('end', () => {
          let result = query.parse(body)
          let comment = {}
          let components = result.username.split('\r\n')
          let text = components[1].split('=')
          let date = new Date()
          let mins = date.getMinutes()
          let hours = date.getHours()
          let day = date.getDate()
          let month = date.getMonth() + 1
          let year = date.getFullYear()
          comment.username = components[0]
          comment.text = text[1]
          comment.createdOn = '' + month + '/' + day + '/' + year + ' ' + hours + ':' + mins
          article.comments.push(comment)
          console.log(db)
        })
      }
    }
    if (!articleExists) {
      body += '<h1>No results found</h1>'
      res.writeHead(400)
      res.write(body)
      res.end()
    }
    res.writeHead(200)
    res.write('Comment added!')
    res.end()
  } else {
    return true
  }
}
