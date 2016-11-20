let url = require('url')
let query = require('querystring')
let uuid = require('node-uuid')
let db = require('../data/db.js')

module.exports = (req, res) => {
  req.path = url.parse(req.url).pathname
  if (req.path === '/submit-article' && req.method === 'POST') {
    let body = ''
    req.on('data', (data) => { body += data })
    req.on('end', () => {
      let result = query.parse(body)
      let article = {}
      let components = result.title.split('\r\n')
      let descr = components[1].split('=')
      let date = new Date()
      let mins = date.getMinutes()
      let hours = date.getHours()
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()
      article.id = uuid.v1()
      article.title = components[0]
      article.desc = descr[1]
      article.createdOn = '' + month + '/' + day + '/' + year + ' ' + hours + ':' + mins
      article.views = 0
      article.deleted = 0
      article.comments = []
      db.push(article)
      console.log(db)
      res.writeHead(200)
      res.write('Article added!')
      res.end()
    // let form = new multiparty.Form()
    // form.parse(req)

    // form.on('part', part => {
    //   if (part.filename) {
    //     let body = ''
    //     part.on('data', data => { body += data })
    //     part.on('end', () => {
    //       fs.writeFile(part.filename, body, err => {
    //         if (err) throw err

    //         res.writeHead(200)
    //         res.write('Uploaded')
    //         res.end()
    //       })
    //     })
    //   } else {
    //     part.resume()
    //   }
    // })
    })
  } else {
    return true
  }
}
