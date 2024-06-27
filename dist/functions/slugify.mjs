function g(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/\-\-+/g,"-").replace(/^[-_]+/,"").replace(/[-_]+$/,"")}

export { g as slugify };
