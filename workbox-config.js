module.exports = {
  globDirectory: "build/",
  globPatterns: ["**/*.{json,ico,html,png,txt,css,js}"],
  swDest: "build/sw.js",
  // ignoreURLParametersMatching: [/^utm_/, /^fbclid$/], //generateSW no funciona con esta propiedad
  swSrc: "src/sw-template.js",
};
