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

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode");
});