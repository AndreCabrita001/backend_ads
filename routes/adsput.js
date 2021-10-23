const Ad = require("../models/Ad");
const router = require('express').Router(); 
 
router.put('/:id', (req, res, next) =>{
    Ad.findOneAndUpdate({_id: req.params.id},{
        $set:{
            title: req.body.title,
            href: req.body.href,
            image: req.body.image,
            content: req.body.content
        }
    })
    .then(result =>{
        res.status(200).json({
            updated_product:result
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})

module.exports = router;