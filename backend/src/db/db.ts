import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'PibtvDb', 
    password: 'pibtv123',
    database: 'membros_da_igreja'
});

export default pool;
