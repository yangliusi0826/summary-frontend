const path = require("path")

const resolve = dir => {
  return path.join(__dirname, dir)
}
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

module.exports = {
  publicPath: '/', // 项目部署的基础路径
  outputDir: 'dist', // 将构建好的文件输出的目录
  assetsDir: 'static', //放置生成的静态资源(相对于outputDir而言)
  //对webpack 配置进行更细粒度的修改--设置路径别名
  chainWebpack: config => {
    config.resolve.alias
    .set("@", resolve("src"))
    .set("assets", resolve("src/assets"))
    .set("views", resolve("src/views"))
    .set("_css", resolve("src/assets/css"))
    .set("image", resolve("src/assets/images"))
    .set("_C", resolve("src/components"))
    .set("utils", resolve("src/utils"))
  },
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败, 当设置为 `"true"` 时会将 lint 错误输出为编译警告
  lintOnSave: true,
  productionSourceMap: false, // 是否为生产环境构建生成 source map
  // CSS 相关选项
  css: {
    // 为预处理器的 loader 传递自定义选项
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      },
      sass: {
        prependData: `
          @import "@/assets/css/variables.scss";
          @import "@/assets/css/mixins.scss";
        `
      }
    }
  },
  // 配置 webpack-dev-server 行为。
  devServer: {
    host: "0.0.0.0",
    https: false, // https:{type:Boolean}
    hotOnly: false,
	  disableHostCheck: true,
    open: true, //配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌
  },
  // 三方插件的选项
  // pluginOptions: {}
}