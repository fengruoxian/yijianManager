import React from 'react'
import PropTypes from 'prop-types'
import {Router} from 'dva/router'
import App from 'routes/app'


const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}


const Routers = function ({history, app}) {
  const routers = [
    {
      path: '/',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('models/dashboard'))
          cb(null, {component: require('routes/dashboard/')})
        }, 'dashboard')
      },
      childRoutes: [
        {
          path: 'user',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/user'))
              cb(null, require('routes/user/'))
            }, 'user')
          },
        }, {
          path: 'user/:id',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/user/detail'))
              cb(null, require('routes/user/detail/'))
            }, 'user-detail')
          },
        }, {
          path: 'login',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/login'))
              cb(null, require('routes/login/'))
            }, 'login')
          },
        }, {
          path: 'product',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              registerModel(app, require('models/product'))
              cb(null, require('routes/product/'))
            }, 'product')
          },
        }, {
          path: '*',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('routes/error/'))
            }, 'error')
          },
        },

      ],

    },

  ]

  return <Router history={history} routers={routers}/>

}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers


