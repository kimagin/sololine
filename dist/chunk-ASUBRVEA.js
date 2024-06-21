"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/functions/repeat.ts
async function repeat(repeatingFunction, options = {}) {
  const { timeout, interval = 1, exitFunction } = options;
  return new Promise((resolve) => {
    let startTime = performance.now();
    let requestId;
    const execute = (timestamp) => {
      const elapsedTime = timestamp - startTime;
      if (elapsedTime >= interval) {
        repeatingFunction();
        startTime = timestamp - elapsedTime % interval;
      }
      requestId = requestAnimationFrame(execute);
    };
    const stop = () => {
      cancelAnimationFrame(requestId);
      if (exitFunction) exitFunction();
      resolve();
    };
    if (timeout) setTimeout(stop, timeout);
    requestId = requestAnimationFrame(execute);
  });
}



exports.repeat = repeat;
//# sourceMappingURL=chunk-ASUBRVEA.js.map