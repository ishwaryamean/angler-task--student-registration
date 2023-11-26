var mysql = require('mysql');
const { Validator } = require('node-input-validator');
var db = require('../db/db')

exports.registerStudents = async (req, res) => {
    let values = req.body;
    const v = new Validator(req.body, {
        student_name: 'required',
        student_code: 'required',
        department: 'required',
        gender: 'required',
        email_id: 'required|email',
        dob: 'required',
    });

    v.check().then((matched) => {
        if (!matched) {
            res.status(422).send(v.errors);
        } else {
            let table = 'student_details';
            let getQuery = `SELECT email_id FROM ${table} WHERE email_id='${values.email_id}'`;

            db.query(getQuery, (err, data) => {
                if (err) {
                    res.json({
                        status: false,
                        message: 'Error checking for existing email',
                        data: err
                    });
                } else if (data.length > 0) {
                    res.json({
                        status: false,
                        message: 'You are already a member kindly give another email',
                    });
                } else {
                    let query = `INSERT INTO ${table} (student_name, student_code, department, gender, email_id, dob) VALUES ('${values.student_name}', '${values.student_code}', '${values.department}', '${values.gender}', '${values.email_id}', '${values.dob}')`;
                    db.query(query, (err, data) => {
                        if (err) {
                            res.json({
                                status: false,
                                message: 'Error inserting student details into database',
                                data: err
                            });
                        } else {
                            res.json({
                                status: true,
                                message: 'Student details inserted successfully',
                                data: data
                            });
                        }
                    });
                }
            });
        }
    }).catch((err) => {
        res.json({
            status: false,
            message: 'Error validating student details',
            data: err
        });
    });
};

exports.getRegisteredStudents = async (req, res) => {
    let table = 'student_details';
    let getQuery = `SELECT * FROM ${table}`;
  
    try {
      db.query(getQuery, (err, data) => {
        if (err) {
          res.json({
            status: false,
            message: 'Error Something Went Wrong',
            data: err
          });
        } else if (data.length <= 0) {
          res.json({
            status: false,
            message: 'No Data Found',
          });
        } else {
          res.json({
            status: true,
            message: 'Successfully Fetched',
            data: data
          });
        }
      });
    } catch (err) {
      res.json({
        status: false,
        message: 'Error fetching student details',
        data: err
      });
    }
  };