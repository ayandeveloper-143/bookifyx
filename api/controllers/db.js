const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'bookifyx',
    password: 'bookifyx',
    database: 'bookifyx'
});

export default db;