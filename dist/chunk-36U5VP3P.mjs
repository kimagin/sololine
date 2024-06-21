// src/functions/slugify.ts
function slugify(text) {
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/\-\-+/g, "-").replace(/^[-_]+/, "").replace(/[-_]+$/, "");
}

export {
  slugify
};
//# sourceMappingURL=chunk-36U5VP3P.mjs.map