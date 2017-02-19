let url = require('url')
let db = require('../data/db.js')

module.exports = (req, res) => {
  req.path = req.path || url.parse(req.url).pathname
  let queryData = url.parse(req.url, true).query
  if (req.path === '/show-article' && req.method === 'GET') {
    let searchedId = queryData.id
    let articleExists = false
    let bodyDetails = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Details</title></head><body>'
    for (let article of db) {
      if (article.id === searchedId) {
        articleExists = true
        article.views++
        bodyDetails += '<h3>' + article.title + '</h3><p>' + article.desc + '</p><p>' + article.createdOn + '</p><p>Viewed: ' + article.views + '</p><input type="button" value="Delete">'

        for (let comment of article.comments) {
          bodyDetails += '<p>From: ' + comment.username + ' on ' + comment.createdOn + ':' + '</p><p>Comment: ' + comment.text + '</p>'
        }

        bodyDetails += '<br/><br/><form method="POST" action="details-comment?id=' + article.id + '" enctype="text/plain"><label for="username">Username</label><br/><input type="text" name="username"><br/><label for="text">Comment</label><br/><input type="text" name="text"><br/><input type="submit" value="Add Comment"></form>'
      }
    }
    if (!articleExists) {
      bodyDetails += '<h1>No results found</h1>'
    }

    bodyDetails += '</body></html>'

    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(bodyDetails)
    res.end()
  } else {
    return true
  }
}
