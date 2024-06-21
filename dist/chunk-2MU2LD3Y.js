"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/functions/pause.ts
function pause(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve();
      } catch (error) {
        reject(error);
      }
    }, ms);
  });
}



exports.pause = pause;
//# sourceMappingURL=chunk-2MU2LD3Y.js.map