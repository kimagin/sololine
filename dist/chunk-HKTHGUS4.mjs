// src/functions/email-validation.ts
function isEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export {
  isEmail
};
//# sourceMappingURL=chunk-HKTHGUS4.mjs.map