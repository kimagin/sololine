'use strict';

function b(e,l={}){let{level:t="log",label:o="",time:n=!1}=l,r=`${n?new Date().toLocaleTimeString():""} ${o&&`[${o}]`} ${e}`.trim(),s={log:{method:console.log,color:"#A9A9A9"},info:{method:console.info,color:"#12b85b"},warn:{method:console.warn,color:"#FFD700"},error:{method:console.error,color:"#FFA07A"}},{method:c,color:i}=s[t],a=`color: ${i}; font-weight: bold; font-style: italic;`;c(`%c${r}`,a);}

exports.log = b;
