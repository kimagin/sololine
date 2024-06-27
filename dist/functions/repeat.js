'use strict';

async function l(s,u={}){let{timeout:t,interval:n=1,exitFunction:i}=u;return new Promise(c=>{let o=performance.now(),e,r=a=>{let m=a-o;m>=n&&(s(),o=a-m%n),e=requestAnimationFrame(r);};t&&setTimeout(()=>{cancelAnimationFrame(e),i&&i(),c();},t),e=requestAnimationFrame(r);})}

exports.repeat = l;
