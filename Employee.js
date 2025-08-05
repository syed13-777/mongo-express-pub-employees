const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    E_ID: Number,
    E_Name: String,
    E_Email: String,
    E_Number: Number,
    E_Gender: String,
    E_Dept: String,
    E_Location: String
}, { collection: 'Emp' }); // Explicitly set collection name

module.exports = mongoose.model('Employee', employeeSchema);
