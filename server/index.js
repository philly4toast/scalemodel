// this appears to be the server that will serve up all the resources for our application
const bodyParser = require('body-parser')
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const CircularJSON = require('circular-json');

//import sampledata and have get handler seed info



app.use(express.static(path.join(__dirname, '../client/dist')));



var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jezebel',
  database: 'ww2Mod'
});

connection.connect();
//needs to be listening...
app.listen(port, () => console.log(`Going on port: ${port}`));
//...define the routes

// app.get('/ammo', (req, res) => {

//     connection.query('SELECT * FROM models', function (error, results, fields){
//       console.log(results)


//     }, {})
//     res.send('hello')
//     if (error) throw error;
// });

app.get('/ammo', (req, res) => {
  connection.query('SELECT * FROM models', function (error, results, fields) {
    const modelList = results.reduce(function (accumulator, modelObj) {
      accumulator.push({
        id: modelObj.id,
        name: modelObj.model_name,
        description: modelObj.description,
        completed: modelObj.completed === 'true'
      })
      console.log(accumulator)
     return accumulator;
    
    }, [])
    res.send(modelList)
    if (error) throw error;
 })
});








