'use strict'
const __defProp = Object.defineProperty
const __getOwnPropDesc = Object.getOwnPropertyDescriptor
const __getOwnPropNames = Object.getOwnPropertyNames
const __hasOwnProp = Object.prototype.hasOwnProperty
const __export = (target, all) => {
  for (const name in all)
    __defProp(target, name, { get: all[name], enumerable: true })
}
const __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (const key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        })
  }
  return to
}
const __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: true }), mod)

// src/index.tsx
const src_exports = {}
__export(src_exports, {
  Button: () => Button,
})
module.exports = __toCommonJS(src_exports)

// src/components/Button/index.tsx
const import_jsx_runtime = require('react/jsx-runtime')
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)('h1', {
    className: '',
    children: 'Hello world!',
  })
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    Button,
  })
