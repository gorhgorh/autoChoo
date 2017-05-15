var html = require('choo/html')

module.exports = function (state, emit) {
  function logOut () {
    emit('pushState', '/')
  }
  var user = state.user
  return html`
    <body>
      <div class="mw9 center ph3-ns cf">
        <div class="fl w-100 pa2">
          <h1>
            Welcome ${state.user.uName}
            <button class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib fr"
              onclick=${logOut}>logout</button>
          </h1>
        </div>
        <div class="fl w-25 pa2">
          <div class=" bg-white">
            <div class="mb3 measure-wide">
              <span class="f3 underline">Inbox</span>
              ${user.inbox.map(function (msg) {
                return html`<div>${msg.subject}</div>`
              })}
            </div>
            <div class="f3 measure-wide underline">Outbox</div>
          </div>
        </div>
        <div class="fl w-75 pa2">Message</div>
      </div>
      <div class="mw9 center ph3-ns">
        <div class="fl w-25 pa2">
          <div class=" bg-white tc pv4">

          </div>
        </div>
      </div>
    </body>
  `
}
