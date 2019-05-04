/**
 * Configuration of the server middlewares.
 */
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import passport from 'passport'
import expressWinston from 'express-winston'
import methodOverride from 'method-override'
import cors from 'cors'

import winstonInstance from 'winston'

const isTest = process.env.NODE_ENV === 'test'
const isDev = process.env.NODE_ENV === 'development'

export default app => {
  app.use(compression())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  app.use(cors())
  app.use(methodOverride())
  if (isDev && !isTest) {
    app.use(morgan('dev'))
    expressWinston.requestWhitelist.push('body')
    expressWinston.responseWhitelist.push('body')
    app.use(
      expressWinston.logger({
        winstonInstance,
        meta: true,
        msg:
          'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
        colorStatus: true
      })
    )
  }
}
