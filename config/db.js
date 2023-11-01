const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'oxygen-aurora2-cluster.cluster-cladr7eisf0t.us-east-1.rds.amazonaws.com',
    user: 'dev1node',
    password: '7v14iw8l332l',
    database: 'dev1node',
    port: 3306
})

module.exports = connection