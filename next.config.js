// next.config.js
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  }
})
module.exports = withSass()