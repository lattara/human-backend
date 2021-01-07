const mongoose = require("mongoose")

export class mongooseConnection {
    // connection to the cloud database
    static connect(callback: any){
        const dbConnectionString = process.env.MONGODBURL
        mongoose.connect(dbConnectionString, {useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify: false})
        .then((result: any)=> {
            console.log('Successfully connected to the Database')
            callback
        })
        .catch((err: any)=>console.log('Error in connecting to db'));
    }
 
}
