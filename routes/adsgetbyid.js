const Ad = require("../models/Ad");
const router = require('express').Router(); 

router.get("/:id", async(req, res, next) =>{
    Ad.findById(req.params.id)
    .then(result =>{
        res.status(200).json({
            adData: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    });
});

module.exports = router;