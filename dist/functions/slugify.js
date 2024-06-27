'use strict';

function t(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/\-\-+/g,"-").replace(/^[-_]+/,"").replace(/[-_]+$/,"")}

exports.slugify = t;
