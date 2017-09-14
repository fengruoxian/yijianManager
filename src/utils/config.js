const API1 = '/api/v1'
const API2 = '/api/v2'

module.export = {
  name: '',
  prefix: '',
  footerText: '',
  logo: '/logo.png',
  iconFontCSS: '',
  iconFontJS: '',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  API1,
  API2,
  api: {
    userLogin: `${API1}/user/login`,
    userLogout: `${API1}/user/logout`,
    userInfo: `${API1}/userInfo`,
    menus: `${API1}/menus`,
  },
}
