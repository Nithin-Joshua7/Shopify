import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose"
import url from "./mongo_url.js"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
import router from "./routes/product.route.js"
const app = express()
app.use(express.json())
app.use(cookieParser());
app.use(
    cors({
        origin:"https://shopify-dhed.onrender.com",
        credentials:true
    })
)

dotenv.config();
//Database Connection
mongoose.connect(url)
.then(()=>console.log("database connected successfully"))
.catch((err)=>console.log(err))

app.use("/api/auth", authRoutes);
app.use("/api/products",router)

app.listen(process.env.PORT || 4000, process.env.HOST || "0.0.0.0",()=>{
    console.log("Server is running at http://localhost:4000")
})
