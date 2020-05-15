// this appears to be the server that will serve up all the resources for our application
const bodyParser = require('body-parser')
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const CircularJSON = require('circular-json');



app.use(express.static(path.join(__dirname, '../client/dist')));

//needs to be listening...
app.listen(port, () => console.log(`Going on port: ${port}`));
//...define the routes










