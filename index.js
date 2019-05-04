import express from 'express'
import chalk from 'chalk'
import middlewaresConfig from './config/middlewares'
import ApiRoutes from './routes/index'
require('dotenv').config()
const app = express()

middlewaresConfig(app)

app.use('/', ApiRoutes)

app.listen(process.env.API_PORT, () =>
  console.log(
    chalk.green.bold(
      `
      Yep this is working 🍺
      App listen on port: ${process.env.API_PORT} 🍕
      you are AWESOME !!! 🦄
    `
    )
  )
)
