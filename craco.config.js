const path = require("path");

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      "apis": resolve("src/apis"),
      "components": resolve("src/components")
    }
  }
}