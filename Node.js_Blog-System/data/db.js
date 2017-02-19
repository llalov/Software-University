let db = [
  {
    'id': '9998',
    'title': 'some funny title',
    'desc': 'some funny desc',
    'createdOn': '10/9/2016 12:30',
    'views': 0,
    'deleted': 0,
    'comments': [{
      'username': 'llalov',
      'text': 'some test text',
      'createdOn': '10/9/2016 12:30'
    }]
  },
  {
    'id': '9999',
    'title': 'some boring title',
    'desc': 'some boring desc',
    'createdOn': '10/9/2016 12:34',
    'views': 0,
    'deleted': 0,
    'comments': [{
      'username': 'anonymous',
      'text': 'other test text',
      'createdOn': '10/9/2016 12:30'
    }]
  }
]

module.exports = db
