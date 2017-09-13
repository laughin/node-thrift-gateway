import globalLoader from '../utils/global-loader'

export const routes = app => {
  globalLoader(`${__dirname}/../components`, '/**/*Router.js').then((routes) => {
    routes.forEach((route) => {
      app
        .use(route.routes())
        .use(route.allowedMethods({
          throw: true,
        }))
    })
  })
}
