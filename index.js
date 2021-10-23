const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3000;

const adGetRoute = require("./routes/adsget");

const adGetByIdRoute = require("./routes/adsgetbyid");

const adPostRoute = require("./routes/adspost");

const adPutRoute = require("./routes/adsput");

const adDeleteRoute = require("./routes/adsdelete");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(console.log("DB CONNECTION => SUCCESSFUL")).catch((err) => console.log(err));

app.use(express.json());

app.get("/adsget", async(req, res, next) =>{
    Ad.find()
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

app.use("/adsgetbyid", adGetByIdRoute);

app.use("/adspost", adPostRoute);

app.use("/adsput", adPutRoute);

app.use("/adsdelete", adDeleteRoute);

app.listen(PORT, () =>{
    console.log("Backend Server Running...")
});