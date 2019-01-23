const Koa = require('koa')
const helmet = require('koa-helmet')
const onerror = require('koa-onerror')
const cors = require('kcors')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const koaSwagger = require('koa2-swagger-ui')
const routes = require('./router')

const app = new Koa()
app.use(helmet())
app.use(cors())
app.use(static('./.swag'))
app.use(
  koaSwagger({
    routePrefix: '/swagger', // host at /swagger instead of default /docs
    swaggerOptions: {
      url: '/swagger.json', // example path to json
    },
  }),
)
onerror(app)
if (process.env.NODE_ENV !== 'test') {
  app.use(logger())
}
app.use(bodyParser())
app.use(routes())

module.exports = app
