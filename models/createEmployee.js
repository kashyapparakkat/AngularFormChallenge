const mongoose = require("mongoose");

var employeeDetails = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    position: {
        type: String,
    },
    office: {
        type: String,
    },
    salary: {
        type: Number,
    },

});

module.exports = mongoose.model("employee", employeeDetails);
