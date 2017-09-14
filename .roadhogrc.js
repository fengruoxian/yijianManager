const path = require('path')
const {version} = require('./package.json')

const svgSpriteDirs = [
  path.resolve(__dirname, 'src/svg/'),
  require.resolve('antd').replace(/index\.js$/, '')
]

export default {
  entity: 'src/index.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  theme: "./theme.config.js",
  publicPath: `/${version}/`,
  outputPath: `./dist/${version}`,

  //开发环境
  env: {
    development: {
      extraBabelPlugins: [
        "dva-hmr",
        "transform-runtime",
        ["import",
          {
            "libraryName": "antd",
            "style": true
          }
        ]
      ]
    },
    //生产环境
    production: {
      extraBabelPlugins: [
        "transform-runtime",
        ["import",
          {
            "libraryName": "antd",
            "style": true
          }
        ]
      ]

    }
  },
 /* dllPlugin: {
    exclude: ["babel-runtime"],
    include: ["dva/router", "dva/saga", "dva/fetch"]
  }*/
}

