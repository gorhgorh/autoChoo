var html = require('choo/html')

module.exports = function (state, emit) {
  function logOut () {
    emit('pushState', '/')
  }

  return html`
    <body>
      <div class="mw9 center ph3-ns cf">
        <div class="fl w-100 pa2">
          <h1>
            Welcome ${state.uName}
            <button class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib fr"
              onclick=${logOut}>logout</button>
          </h1>
        </div>
        <div class="fl w-25 pa2">
          <div class="outline bg-white tc pv4">
            <h3 class="f3 measure-wide">Inbox</h3>
            <h3 class="f3 measure-wide">Outbox</h3>
          </div>
        </div>
        <div class="fl w-75 pa2">Message</div>
      </div>
      <div class="mw9 center ph3-ns">
        <div class="fl w-25 pa2">
          <div class="outline bg-white tc pv4">

          </div>
        </div>
      </div>
    </body>
  `
}
