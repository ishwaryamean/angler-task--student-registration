var express = require('express');
var router = express.Router();
var student=require('../controller/student')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/student_register',student.registerStudents)
router.get('/get_student_details',student.getRegisteredStudents)

module.exports = router;
