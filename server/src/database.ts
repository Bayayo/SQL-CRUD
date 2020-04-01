import mysql from '../node_modules/promise-mysql/index';
import keys from './keys';


const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB esta conectado');
});

export default pool;