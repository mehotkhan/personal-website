'use strict';

const {
  escapeHTML
} = require('hexo-util');

module.exports = function (args, content) {
  return `<section class="app-section">
    <div id="wasm-windows">
    ${args.join(' ')}
    ${escapeHTML(content)}
    </div>
  </section>`;
};
