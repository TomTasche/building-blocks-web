'use strict'

var Moment = require('moment')
var Express = require('express')

var PORT = process.env.PORT || 8080

var DATE_FORMAT = 'HH:mm:ss'

function initialize () {
  let app = Express()

  let staticOptions = {}
  staticOptions.index = 'bundle.html'

  app.use(Express.static('public', staticOptions))

  app.get('/time', onTimeRequest)

  app.listen(PORT, function () {
    console.log('server is running')
  })
}

function onTimeRequest (request, response) {
  let nowMoment = Moment.utc()
  let nowTime = nowMoment.format(DATE_FORMAT)

  let responseObject = {}
  responseObject.time = nowTime

  response.end(JSON.stringify(responseObject))
}

initialize()
