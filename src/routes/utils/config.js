/**
 * 请求入口配置，路径
 * @type {string}
 */

const APIV1 = '/api/v1'
const APIV2 = 'api/v2'

module.exports = {
  name: '易兼职',
  prefix: "yijian",
  footerText: "易兼职 © 2017 org",
  logo: "/logo.png",
  iconFontCSS: "/iconfont.css",
  iconFontJS: "/iconfont.js",
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    productInfo: `${APIV1}/productInfo`,
    menus: `${APIV1}/menus`,

  }


}
