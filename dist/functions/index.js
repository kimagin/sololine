'use strict';

function f(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/\-\-+/g,"-").replace(/^[-_]+/,"").replace(/[-_]+$/,"")}function g(e){return new Promise((t,r)=>{setTimeout(()=>{try{t();}catch(o){r(o);}},e);})}function b(e){return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)}function d(e,t={}){let{level:r="log",label:o="",time:a=!1}=t,n=`${a?new Date().toLocaleTimeString():""} ${o&&`[${o}]`} ${e}`.trim(),i={log:{method:console.log,color:"#A9A9A9"},info:{method:console.info,color:"#12b85b"},warn:{method:console.warn,color:"#FFD700"},error:{method:console.error,color:"#FFA07A"}},{method:m,color:p}=i[r],c=`color: ${p}; font-weight: bold; font-style: italic;`;m(`%c${n}`,c);}function v(e,t={}){let{min:r=0,float:o=!1,mirror:a=!1,percision:l=10}=t,n=a?-e:r,i=e-n;return o?parseFloat((Math.random()*i+n).toFixed(l)):Math.floor(Math.random()*i+n)}async function x(e,t={}){let{timeout:r,interval:o=1,exitFunction:a}=t;return new Promise(l=>{let n=performance.now(),i,m=c=>{let u=c-n;u>=o&&(e(),n=c-u%o),i=requestAnimationFrame(m);};r&&setTimeout(()=>{cancelAnimationFrame(i),a&&a(),l();},r),i=requestAnimationFrame(m);})}

exports._isEmail = b;
exports._log = d;
exports._pause = g;
exports._random = v;
exports._repeat = x;
exports._slugify = f;
