const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    dateString: { type: String, unique: true },
    course: {type: mongoose.Schema.ObjectId, required: true, ref: 'course'},
    students: [{
        student: {type: mongoose.Schema.ObjectId, required: true, ref: 'student'},
        present: {type: Boolean, required: true},
    }]
})

const Attendance = mongoose.model('attendance', AttendanceSchema, 'attendance');


module.exports = {
    Attendance
};
