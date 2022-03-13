const mysql =require('mysql2')

const pool= mysql.createPool({
    host:'localhost',
    user:'root',
    database:'books',
    password:'password@123'
});

module.exports =pool