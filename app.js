require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const routerListing = require('./router/listingRouter')
const connectDB = require('./db/connect')
const errorHandler = require('./util/handleError')

app.use(express.static('public'))
app.use(express.json())


app.use('/api/v1/', routerListing)

app.use(errorHandler)

const port = process.env.PORT || 3000
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port)
    }catch(err){
        console.log(err);
    }
}

start()