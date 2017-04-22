// redeclare dependencies to avoid linter-warnings
var fetch = window.fetch

function fetchTime () {
  var promise = fetch('/time')
  promise = promise.then(function (response) {
    if (!response.ok) {
      throw new Error('request failed')
    }

    return response.json()
  })

  return promise
}

var bridge = {}
bridge.fetchTime = fetchTime

export default bridge
