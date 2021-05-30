const express =require('express');
const mongoose =require('mongoose');
const dotenv=require('dotenv');
const cors =require('cors');
const userroutes = require('./routes/user');
const travelroutes = require('./routes/travel');
const bodyParser = require('body-parser');

dotenv.config();
mongoose
    .connect(process.env.MONGO_URI,{
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("mongo connected"))
    .catch((err) => console.log(err));

app=express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/user",userroutes);
app.use("/travel",travelroutes);


app.listen(8080 , () => console.log("server is running"));

