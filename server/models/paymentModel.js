import mongoose from "mongoose";


const paymentSchema=mongoose.Schema({
    artist:{type:String,required:true},
    activity:{type:String,required:true},
    total:{type:Number,required:true},
    paid:{type:Number,required:true},
    phone:{type:String,required:true}
},{timestamps:true});

const paymentModel=mongoose.models.payment || mongoose.model("payment",paymentSchema);

export default paymentModel;