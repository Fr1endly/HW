var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'loselose',
  database : 'e_store'
});

connection.connect();

var solution;
connection.query('select * from user where ID;', function (error, results, fields) {
  solution = results[0]
  console.log(solution)
});

connection.end();


/* GET home page. */
router.get('/', function(req, res, next) {

  res.end(solution.first_name)
});

module.exports = router;
