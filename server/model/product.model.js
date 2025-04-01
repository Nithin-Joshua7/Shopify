import mongoose from "mongoose";
const Product_Schema = mongoose.Schema(
    {
        name: {
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        }},
        {timestamps:true}
    )

    const Product = mongoose.model('Product',Product_Schema)

    export default Product