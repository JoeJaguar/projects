//Run node of Customer

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});

const app = express();
app.get('/satit-tbl', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM satit-tbl', function (error, results, fields) {
     
      if (error) throw error;
      res.send(results)
    });
  });
});

app.listen(8080, () => {
 console.log('Go to http://localhost:8080/satit-tbl so you can see the data.');
});