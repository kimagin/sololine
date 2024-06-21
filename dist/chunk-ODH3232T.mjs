// src/functions/random.ts
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

export {
  random
};
//# sourceMappingURL=chunk-ODH3232T.mjs.map