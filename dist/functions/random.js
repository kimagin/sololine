'use strict';

function m(o,e={}){let{min:t=0,float:i=!1,mirror:a=!1,percision:s=10}=e,n=a?-o:t,r=o-n;return i?parseFloat((Math.random()*r+n).toFixed(s)):Math.floor(Math.random()*r+n)}

exports.random = m;
