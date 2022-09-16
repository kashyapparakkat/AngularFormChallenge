const employee = require("../models/createEmployee");
const express = require("express");
const router = express.Router();
const uniqueID = require("../utils/uniqueID");

/*
router.get("/get-student-details", async function (req, res) {
    try {
        const contract = employee
            //.findOne({email: req.email})
            .findOne({email: "kashyap.parakkat@gmail.com"})
            .then((data) => {
                if (data) {
                    res.status(200);
                    res.json(data);
                } else {
                    res.status(404);
                    res.json({
                        message: ["student not found"],
                    });
                }
            })
            .catch((err) => {
                console.log("Error:", err);
                res.json(err);
            });
    }
    catch (err)
    {
        console.log("error", err)
        res.status(500)
        res.json(err);
    }
});
*/

// create Scenario api
router.post("/add-employee", async (req, res) => {

    try {
        res.header("Access-Control-Allow-Origin",'*');
        res.header("Access-Control-Allow-method:GET,POST,PUT,DELETE");
        // console.log("User email -- " + req.body.email);

        let uID = uniqueID();

        const apicontract = new employee({
            id: uID,
            name: req.body.employeename,
            position: req.body.position,
            /*username: req.body.username,*/
            office: req.body.officelocation,
            // location: req.body.location,
            salary: req.body.salary,
            //dob: req.body.dob,

        });
        apicontract
            .save()
            .then((data) => {
                res.status(200);
                res.json({
                    id: data.id,
                    name: data.name
                });
            })
            .catch((err) => {
                console.log("Error:", err);
                res.status(500);
                res.json(err);
            });
    }
    catch (err)
    {
        console.log("error", err)
        res.status(500)
        res.json(err);
    }
});




module.exports = router;