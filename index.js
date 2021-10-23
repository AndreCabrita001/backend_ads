const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const adGetRoute = require("./routes/adsget");

const adGetByIdRoute = require("./routes/adsgetbyid");

const adPostRoute = require("./routes/adspost");

const adPutRoute = require("./routes/adsput");

const adDeleteRoute = require("./routes/adsdelete");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(console.log("DB CONNECTION => SUCCESSFUL")).catch((err) => console.log(err));

app.use(express.json());

app.use("/api/adsget", adGetRoute);

app.use("/api/adsgetbyid", adGetByIdRoute);

app.use("/api/adspost", adPostRoute);

app.use("/api/adsput", adPutRoute);

app.use("/api/adsdelete", adDeleteRoute);

app.listen(process.env.PORT || 5000, () =>{
    console.log("Backend Server Running...")
});