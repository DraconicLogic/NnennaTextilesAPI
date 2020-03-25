require('custom-env').env()
const { DB_HOST, DB_NAME } = process.env
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const apiRouter = require('./routes/api.js')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(`${DB_HOST}${DB_NAME}`, {useNewUrlParser: true})
.then(() => {
  console.log(`Successfully connected to ${DB_NAME}`)
})
.catch(console.error)

app.use(cors())
app.use(bodyParser.json())
app.use('/api', apiRouter)




module.exports = app