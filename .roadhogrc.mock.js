const mock = {}

/**
 *根据node的fs、path模块，查询文件的路径
 * Object.assign（target，... sources）为ES6中的方法:用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象
 * target目标对象，sources源对象
 */

require('fs').readdirSync(require('path').join(__dirname + '/src/mock')).forEach(function (file) {

  Object.assign(mock, require('./src/mock/' + file))
})


module.exports = mock
