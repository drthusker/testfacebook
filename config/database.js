// config/database.js

 //    'connection': {
 //        'host': 'localhost',
 //        'user': 'root',
 //        'password': 'root'
 //    },
	// 'database': 'my_schema',
 //    'users_table': 'users'
module.exports = {

var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: "",
        database: "db_name",
    });
};
};