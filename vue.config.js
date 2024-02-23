import path from "path"

module.exports = {
  loaderOptions: {
    scss: {
      prependData: '@import "@/scss/variables.scss"',
    },
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },

}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, '/src/scss/variables.scss'),
      ],
    })
}
