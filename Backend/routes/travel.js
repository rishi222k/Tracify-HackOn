const router =require('express').Router();
const Travel =require('../models/travel')
const bycrypt= require('bcrypt');

router.post('/' ,  async(req,res) =>{

    var salt = await bycrypt.genSalt();
    var d = new Date();
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate =  day + "/" + month +  "/" + year ;
    console.log(req.body);
    let travel = new Travel({
        p_hash:req.body.phash,
        trip_id:salt,
        from:req.body.from,
        to:req.body.to,
        date:newdate
    });
    await travel.save();
    console.log(travel);
    res.send(travel);
})

router.get("/data", async(req,res) => {
    const data =await Travel.find();
    console.log(data);
    res.json(data);
})

router.get("/detail/:id", async(req,res) => {
    const { id } = req.params;
    const data = await Travel.find({p_hash:id});
    console.log(data);
    res.json(data);
});
module.exports=router;