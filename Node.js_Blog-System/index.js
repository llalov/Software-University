let http = require('http')
let cluster = require('cluster')
let cpus = require('os').cpus().length

let port = process.env.PORT || 8877

let homePage = require('./handlers/home-page.js')
let favicon = require('./handlers/favicon.js')
let staticFiles = require('./handlers/static-files.js')
let createArticle = require('./handlers/create-article.js')
let submitArticle = require('./handlers/submit-article.js')
let alltArticles = require('./handlers/all-articles.js')
let showArticle = require('./handlers/show-article.js')
let submitComment = require('./handlers/submit-comment.js')

if (cluster.isMaster) {
  for (let i = 0; i < cpus; i++) {
    cluster.fork()
  }
} else {
  http
  .createServer((req, res) => {
    let handlers = [
      showArticle,
      homePage,
      submitComment,
      submitArticle,
      createArticle,
      alltArticles,
      favicon,
      staticFiles
    ]
    for (let handler of handlers) {
      let next = handler(req, res)
      if (!next) {
        break
      }
    }
  }).listen(port)
}
