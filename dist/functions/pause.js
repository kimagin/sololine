'use strict';

function n(e){return new Promise((r,o)=>{setTimeout(()=>{try{r();}catch(t){o(t);}},e);})}

exports.pause = n;
