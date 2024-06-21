"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/functions/email-validation.ts
function isEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}



exports.isEmail = isEmail;
//# sourceMappingURL=chunk-EOIF5D66.js.map