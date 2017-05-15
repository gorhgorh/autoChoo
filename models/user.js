var DEBUG = true
/**
 * create and manage access to the store
 * currently one big store, could be splitted later if needed
 *
 * @param {Object} state choo's state of the app
 * @param {function} emitter choo's emitter
 */
module.exports = function (state, emitter) {
  // for debug purpose
  if (DEBUG) window.uState = state // debug export state to the window object
  // define initial state
  if (!state.user) state.user = createUser()
  console.log('state')
  console.log(state)
  // set the username and navigate to inbox
  emitter.on('user:setName', function (uName) {
    state.user.uName = uName
    emitter.emit('pushState', '/inbox')
  })
}

function createUser (uName) {
  if (!uName) uName = 'alice'
  return {
    uName: uName,
    inbox: [createMail({to: uName})],
    outbox: [],
    preferences: {
      autocrypt: false
    }
  }
}

function createMail (msg) {
  if (!msg) msg = {}
  return {
    from: msg.from || 'admin',
    to: msg.to || '',
    subject: msg.subject || 'welcome',
    content: msg.content || 'default message',
    isEncrypted: msg.isEncrypted || false
  }
}

console.log(createMail())
