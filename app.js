const express = require('express')
const app = express()

const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middlewares/errorhandler')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/',router)
app.use(errorHandler)

app.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});