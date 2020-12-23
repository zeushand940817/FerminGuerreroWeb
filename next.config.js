const path = require('path')
require('dotenv').config()

const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = {
  env: {
    API_URL: process.env.API_URL
  },
  
  webpack: (config) => {
    config.resolve.alias.components = path.join(__dirname, 'components')
    config.resolve.alias.public = path.join(__dirname, 'public')
    return config
  },
}
