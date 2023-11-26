var mysql = require('mysql');

var connection=mysql.createConnection({
    database: "student_registration",
    user:"root",
    password: "",
    host: 'localhost',
})

connection.connect((err,data)=>{
    if (err) {
        throw err
    } else {
        console.log("Database Connected Successfully")
    }
})
module.exports = connection


// CREATE TABLE student_details (
//     student_name VARCHAR(225),
//     student_code INT UNIQUE,
//     department VARCHAR(225),
//     gender VARCHAR(225),
//     email_id VARCHAR(225) UNIQUE,
//     dob DATE
// );