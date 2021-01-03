import { Schema } from "inspector";
import { connect } from "mongodb";
const mongoose = require("mongoose")
const Schema = mongoose.Schema

export class mongooseConnection {
    // connection to the cloud database
    static connect(callback: any){
        const dbConnectionString = 'mongodb+srv://human:jasam4242@human.x14kg.mongodb.net/human?retryWrites=true&w=majority'
        mongoose.connect(dbConnectionString, {useNewUrlParser: true, useUnifiedTopology:true})
        .then((result: any)=> {
            console.log('Successfully connected to the Database')
            callback
        })
        .catch((err: any)=>console.log('Error in connecting to db'));
    }
 
}
