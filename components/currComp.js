var html = require('choo/html')
module.exports = function (state, emit) {
  var uName = ''

  function onChangeInput (e) {
    uName = e.srcElement.value
  }

  function setUsername () {
    emit('setUName', uName)
  }
  return html`
    <body>
      <h1>please enter your username</h1>
      <input type="text" oninput=${onChangeInput}/>
      <button onclick=${setUsername}>Set username</button>
    </body>
  `
}
