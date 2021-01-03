
  const bodyParser = require("body-parser")
  import cors from 'cors';
  import { Application } from 'express';
  import express from 'express';

  export default async ( app: Application) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json())
    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');


    // static folder
    app.use('/uploads', express.static('public'));

    app.use(cors());

    app.get('/', (req, resp) => {
        resp.send('Server set up for HUMAN');
      });

          // import all the routes
    app.use('/api/products', require('../routes/product.routes'))
    // app.use('/api/orders', require('./src/routes/orders.routes'))
    // app.use('/api/users', require('./src/routes/users.routes'))


      return app;
  }