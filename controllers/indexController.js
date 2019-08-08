const mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'e_store'
});
connection.connect();

query = connection.query('select * from user where ID = 1;',)


exports.index = function(req, res) {
    res.send('WELCOME HOME PAGE')
}