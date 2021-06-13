/* global hexo */

'use strict';

const path = require('path');

// Add comment
hexo.extend.filter.register('theme_inject', injects => {
  let theme = hexo.theme.config;
  if (!theme.hyvor.enable || !theme.hyvor.site_id) return;

  injects.comment.raw('hyvor', '<div class="comments" id="hyvor-comments"><div id="hyvor-talk-view"></div></div>', {}, {
    cache: true
  });

  injects.bodyEnd.file('hyvor', path.join(hexo.theme_dir, 'layout/_third-party/comments/hyvor.njk'));

});
