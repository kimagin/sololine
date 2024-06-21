// src/functions/log.ts
function log(content, options = {}) {
  const { level = "log", label = "", time = false } = options;
  const timestamp = time ? (/* @__PURE__ */ new Date()).toLocaleTimeString() : "";
  const logMessage = `${timestamp} ${label && `[${label}]`} ${content}`.trim();
  const levels = {
    log: { method: console.log, color: "#A9A9A9" },
    info: { method: console.info, color: "#12b85b" },
    warn: { method: console.warn, color: "#FFD700" },
    error: { method: console.error, color: "#FFA07A" }
  };
  const { method, color } = levels[level];
  const style = `color: ${color}; font-weight: bold; font-style: italic;`;
  method(`%c${logMessage}`, style);
}

export {
  log
};
//# sourceMappingURL=chunk-S4EO2IUZ.mjs.map