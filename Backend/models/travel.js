const mongoose= require('mongoose');

const travelSchema = new mongoose.Schema({
    p_hash :{
        type:String,
    },
    trip_id :{
        type:String,
    },
    from:{
        type:String,
    },
    to:{
        type:String,
    },
    date:{
        type:String,
    }
});

module.exports = mongoose.model("travel",travelSchema);