var html = require('choo/html')

/**
 * display a view to prototype it not used in the app
 *
 * @param function view
 * @returns function
 */
module.exports = function (view) {
  return function (state, emitter) {
    return html`
    <body>
      <div class="mw9 center ph3-ns">
        <div class="cf ph2-ns">
          <div class="fl w-100 w-third-ns pa2">
            <div class=" bg-white pv4"></div>
          </div>
          <div class="fl w-100 w-third-ns pa2">
            <div class="outline bg-white pv4">
              ${view(state, emitter)}
            </div>
          </div>
          <div class="fl w-100 w-third-ns pa2">
            <div class=" bg-white pv4"></div>
          </div>
        </div>
      </div>
    </body>
    `
  }
}
