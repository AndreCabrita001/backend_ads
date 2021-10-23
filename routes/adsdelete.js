const Ad = require("../models/Ad");
const router = require('express').Router(); 

router.delete('/:id',(req, res, next) => {
    Ad.remove({_id: req.params.id})
    .then(result =>{
        res.status(200).json({
            message: 'product deleted',
            result: result
        })
    })
    .catch(err =>{
        res.status(200).json({
            error:err
        })
    })
})

module.exports = router;