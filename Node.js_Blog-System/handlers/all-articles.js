let url = require('url')
let db = require('../data/db.js')

module.exports = (req, res) => {
  req.path = req.path || url.parse(req.url).pathname
  if (req.path === '/all-articles' || req.method === 'GET') {
    res.writeHead(200)
    db.sort((a, b) => {
      return new Date(a.createdOn).getTime - new Date(b.createdOn).getTime()
    })
    let body = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>All</title></head><body><h1>All Articles</h1>'

    for (let article of db) {
      body += '<h3>' + article.title + '</h3><p><a href="show-article?id=' + article.id + '">Read More..</a></p><p>' + article.createdOn + '</p>'
    }
    body += '</body></html>'
    res.write(body)
    res.end()
  } else {
    return true
  }
}
