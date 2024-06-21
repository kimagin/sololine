"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/functions/random.ts
function random(max, options = {}) {
  const { min = 0, float = false, mirror = false, percision = 10 } = options;
  const effectiveMin = mirror ? -max : min;
  const range = max - effectiveMin;
  if (!float) {
    return Math.floor(Math.random() * range + effectiveMin);
  } else {
    return parseFloat((Math.random() * range + effectiveMin).toFixed(percision));
  }
}



exports.random = random;
//# sourceMappingURL=chunk-PRZ24WON.js.map