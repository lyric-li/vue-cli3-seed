const path = require('path')

// 绝对路径
function resolve (dir) {
  return path.join(__dirname, '', dir)
}

module.exports = {
  chainWebpack: config => {
    // 替换 svg loader
    const svgRule = config.module.rule('svg')

    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()

    // 添加要替换的 loader
    svgRule
      .test(/\.svg$/)
      .include.add(resolve('src/icons')).end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .tap(options => {
        options = {
          symbolId: 'icon-[name]'
        }
        return options
      })

    // 全局引入主题样式
    // config.module
    //   .rule('scss')
    //   .test(/\.scss$/)
    //   .use('sass-resources-loader')
    //   .loader('sass-resources-loader')
    //   .tap(options => {
    //     options = {
    //       resources: resolve('src/assets/styles/theme.scss')
    //     }
    //     return options
    //   })
    //   .end()
  }
}
