require('dotenv').config()
const express = require('express')
const ctrl = require('./controller')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express() 



app.use(express.json())

// ENDPOINTS:
const inventoryUrl = "/api/inventory"
app.post(inventoryUrl, ctrl.create);
app.get(inventoryUrl, ctrl.read);
app.put(inventoryUrl, ctrl.update);
app.delete(inventoryUrl, ctrl.delete);


massive(CONNECTION_STRING).then(databaseConnection => {
  app.set('db', databaseConnection) //this is an express function. Look more into it
  console.log('DB connected')
  
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} beers on the wall.`))
})
