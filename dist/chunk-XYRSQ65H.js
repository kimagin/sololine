"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/functions/slugify.ts
function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/\-\-+/g, "-").replace(/^[-_]+/, "").replace(/[-_]+$/, "");
}



exports.slugify = slugify;
//# sourceMappingURL=chunk-XYRSQ65H.js.map