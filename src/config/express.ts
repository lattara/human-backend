import cors from 'cors'
import { Application } from 'express'
import express from 'express'
import { ProductRoutes } from '../routes/product.routes'
import { OrdersRoutes } from '../routes/orders.routes'
import { UserRoutes } from '../routes/user.routes'
const bodyParser = require("body-parser")

  export default async ( app: Application) => {
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
    app.get('/status', (req, res) => { res.status(200).end(); })
    app.head('/status', (req, res) => { res.status(200).end(); })
    app.enable('trust proxy')


    // static folder
    app.use('/uploads', express.static('public'))

    app.use(cors())

    app.get('/', (req, resp) => {
        resp.send('Server set up for HUMAN')
      })

    ProductRoutes(app)
    UserRoutes(app)
    OrdersRoutes(app)

      return app;
  }