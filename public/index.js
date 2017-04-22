(function () {
  // redeclare dependencies to avoid linter-warnings
  var mdc = window.mdc
  var Moment = window.moment

  var ServerBridge = window.ServerBridge

  var SnackComponent = window.SnackComponent

  var DATE_FORMAT = 'HH:mm:ss'

  function initialize () {
    mdc.autoInit()

    SnackComponent.initialize()

    var magicButton = document.querySelector('#magic-button')
    magicButton.addEventListener('click', onMagicButtonClicked)
  }

  function onMagicButtonClicked () {
    var promise = ServerBridge.fetchTime()

    promise.then(function (response) {
      var serverTime = response.time
      var nowTime = Moment().format(DATE_FORMAT)

      var message = 'our time ' + nowTime + ' vs server ' + serverTime
      SnackComponent.show(message)
    })

    promise.catch(function (error) {
      var message = 'request failed'
      console.error(message, error)

      SnackComponent.show(message)
    })
  }

  initialize()
})()
