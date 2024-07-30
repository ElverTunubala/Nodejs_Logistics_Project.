import mysql2 from 'mysql2/promise';
let pool;

try {
    pool = mysql2.createPool({
        host: 'localhost',
        user: 'root',
        database: 'ejemplo_1',
        port: 3306,
        password: 'Rlwl2023.',
    })

    console.log('data base conected');
    
} catch (err) {
    console.log(err);
}

export { pool };