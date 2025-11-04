import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'user',
  password: 'password',
  database: 'truckweight',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

export default connection;
