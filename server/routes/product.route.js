import express from "express"
import Product from "../model/product.model.js"
import mongoose  from "mongoose"
const router = express.Router()

router.get("/",async(req,res)=>{
    const products = await Product.find({})
    return res.status(200).json({products})
})

router.post("/",async(req,res)=>{
    const{name,price,image} = req.body;
    if(!name || !price || !image)
    {
        return res.status(400).json({error:"Provide all required data"})
    }
    const newProduct = new Product({name,price,image})

    try
    {
        await newProduct.save();
        return res.status(200).json({msg:"Product created successfully",product:newProduct})
    }
    catch(err){
        res.status(400).json({msg:"error in creating product",error:err.message})
    }
})

router.put("/:id",async(req,res)=>{
    const id = req.params.id
    const product = req.body
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(400).json({msg:"Product not found"})
    try{
        const updated_Product = await Product.findByIdAndUpdate(id,product,{new:true})
        return res.status(200).json({success:true,msg:"product updated successfully",updated_Product:updated_Product})
    }
    catch(err)
    {
        return res.status(400).send(err.message)
    }
})

router.delete("/:id",async(req,res)=>{
    const id = req.params.id
    try{
        const deleted_Product = await Product.findByIdAndDelete(id)
      /*if(!deleted_Product)
           // return res.status(400).json({msg:"Product not found"})*/
        return res.status(200).json({success:true,msg:"Product deleted successfully",deleted_Product:deleted_Product})
    }
    catch(err){
        return res.status(400).send({ success:false,err:err.message})
    }
})


export default router