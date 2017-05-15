// entry point for the app
// the framework we use
var choo = require('choo')

// css loader and injection of tachyons http://tachyons.io/ for minimal styles
var css = require('sheetify')
css('tachyons')

// models
var user = require('./models/user')

// views
var mailboxView = require('./views/mailbox')
var loginView = require('./views/login')
// var proto = require('./views/proto')

// app init
var DEBUG = true
var app = choo()
if (DEBUG) app.use(logger) // debug events in the console
app.use(user) // general store for the user (name, autocrypt status, mails) and users

// routes, usualy loads views
app.route('/', loginView)
app.route('/inbox', mailboxView)

// app.route('/comp', proto(currComp)) // prototyping view/component route

// mount the app in the dom
app.mount('body')

/**
 * logs event when a emitter is triggered
 *
 * @param {Object} state choo's state of the app
 * @param {function} emitter choo's emitter
 */
function logger (state, emitter) {
  emitter.on('*', function (messageName, data) {
    console.log('event', messageName, data)
  })
}

