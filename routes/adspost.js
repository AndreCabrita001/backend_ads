const Ad = require("../models/Ad");
const router = require('express').Router(); 
 
router.post("/", async(req, res) =>{
    const newAd = new Ad(req.body);

    try{
        const savedAd = await newAd.save();
        res.status(200).json(savedAd);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;