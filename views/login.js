// login view route :/
var html = require('choo/html')

module.exports = function (state, emit) {
  // set default user name if not logged in yet
  var user = state.user
  var uName = (user.uName !== '') ? user.uName : 'Alice'

  // get input value
  function onChangeInput (e) {
    uName = e.srcElement.value
  }

  // emit username
  function setUsername () {
    // emit('setUName', uName)
    if (uName === '') return
    emit('user:setName', uName)
  }
  function headLine () {
    if (user.uName === '') return html`<legend class="f4 fw6 ph0 mh0">Please enter your username</legend>`
    else {
      user.uName === 'alice' ? uName = 'bob' : uName = 'alice'
      emit('render')
      return html`<legend class="f4 fw6 ph0 mh0">Goodbye</legend>`
    }
  }

  // returned view
  return html`
  <body>
    <main class="pa4 black-80">
      <div class="measure center">
        <fieldset id="logIn" class="ba b--transparent ph0 mh0">
          ${headLine()}
          <div class="mt3">
            <label class="db fw6 lh-copy f6" for="userName">Username</label>
            <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="userName"
              id="email-address"
              oninput=${onChangeInput}
              value =${uName}/>
          </div>
        </fieldset>
        <div>
          <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Log in"
            onclick=${setUsername}/>
        </div>
      </div>
    </main>
  </body>`
}
