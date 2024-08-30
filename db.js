/* pg is postgre  interaction package for node js   */
/* pool class allow you to manage multiple connection to database .   */
const {Pool} = require('pg')

const pool = new Pool({
    host : 'db',
    port:5432,
    user: 'user123',
    password: 'pratham123',
    database:'db123'
})

module.exports = pool