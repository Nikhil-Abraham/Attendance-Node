const express = require('express');
const bodyParser = require('body-parser');
const { login, register, get_courses, add_attendance } = require('../controllers/lecturer')

const router = express.Router()

router.use(bodyParser.json());

router.post('/login', login)
router.post('/register', register)
router.post('/get-courses', get_courses)
router.post('/add-attendance', add_attendance)

module.exports = router;
