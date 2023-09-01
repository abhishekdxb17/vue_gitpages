
// vue.config.js file to be placed in the root of your repository
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
    ? 'vue_gitpages'
    : '/'
})
