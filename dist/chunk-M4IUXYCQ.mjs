// src/functions/pause.ts
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

export {
  pause
};
//# sourceMappingURL=chunk-M4IUXYCQ.mjs.map