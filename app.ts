import express from 'express';
import loaders from './src/config';
import {mongooseConnection} from './src/config/mongo'

async function startServer() {

    let port = process.env.PORT;
    if (port == null || port === '') {
    port = '5000';
    }

    const app = express()
    await loaders(app)



    mongooseConnection.connect(app.listen(port, () => console.log(`Express server is running on port ${port}`)))

    
  }
startServer();