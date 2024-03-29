// this appears to be the server that will serve up all the resources for our application
const bodyParser = require('body-parser')
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const CircularJSON = require('circular-json');

//import sampledata and have get handler seed info



app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) 


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

app.get('/', (request, response) => {
  response.json({ info: 'HOW DO I GET MY PAGE TO LOAD INSTEAD OF THIS QUOTE' })
})

app.get('/ammo', (req, res) => {
  connection.query('SELECT * FROM models', function (error, results, fields) {
    const modelList = results.reduce(function (accumulator, modelObj) {
      accumulator.push({
        id: modelObj.id,
        name: modelObj.model_name,
        description: modelObj.description,
        completed: modelObj.completed,
        imageURL: modelObj.rawProjImgURL,
        completedURL: modelObj.completedProjImgURL
      })
     return accumulator;
    
    }, [])
    res.send(modelList)
    if (error) throw error;
 })
});

app.put('/ammo', function (req, res) {
  var thisID = Number(req.body.model.id);
  var completedStatus = req.body.model.completed
  // console.log(completedStatus)
  connection.query(
    `UPDATE models SET completed=(${completedStatus}) WHERE id=('${thisID}') `
    );
  // console.log('the req.body is', thisID)
  // console.log(JSON.parse(req.body))
  res.send('Got a PUT request at /ammo')
})

app.post('/ammo', (req, res) => {
  // console.log(req.body)
  var kitMoName = req.body.name;
  var kitMoDesc = req.body.description;
  var picture1 = req.body.picture1;
  var picture2 = req.body.picture2;
  connection.query(`
    INSERT INTO models (model_name,description,completed,rawProjImgURL,completedProjImgURL) 
    VALUES ( '${kitMoName}' , '${kitMoDesc}', false, '${picture1}', '${picture2}');
  `)
  res.send('got a POST request at /ammo')
});

app.delete('/ammo', (req, res) => {
  console.log(req.body.modelId)
  var deletingID = req.body.modelId;
  connection.query(`
  DELETE FROM models WHERE id='${deletingID}'
`)


  res.send('got a DELETE request at /ammo')
})