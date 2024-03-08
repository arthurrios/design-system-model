"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors,
  fontFamily: () => fontFamily,
  fontSize: () => fontSize,
  fontWeight: () => fontWeight,
  lineHeight: () => lineHeight,
  radii: () => radii,
  space: () => space
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
var colors = {
  white: "#FFF",
  black: "#000",
  "gray-100": "#E1E1E6",
  "gray-200": "#A9A9B2",
  "gray-400": "#7C7C8A",
  "gray-500": "#505059",
  "gray-600": "#323238",
  "gray-700": "#29292E",
  "gray-800": "#202024",
  "gray-900": "#121214",
  "ignite-300": "#00B37E",
  "ignite-500": "#00875F",
  "ignite-700": "#015F43",
  "ignite-900": "#00291D"
};

// src/space.ts
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};

// src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// src/fonts.ts
var fontFamily = {
  default: "Roboto, sans-serif",
  code: "monospace"
};

// src/font-size.ts
var fontSize = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};

// src/font-weight.ts
var fontWeight = {
  "font-normal": "400",
  "font-medium": "500",
  "font-bold": "700"
};

// src/line-height.ts
var lineHeight = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  radii,
  space
});
