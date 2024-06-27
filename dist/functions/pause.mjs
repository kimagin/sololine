function u(e){return new Promise((r,o)=>{setTimeout(()=>{try{r();}catch(t){o(t);}},e);})}

export { u as pause };
