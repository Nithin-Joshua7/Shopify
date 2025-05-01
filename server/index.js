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
        origin:"http://localhost:5173",
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

app.listen(4000,"localhost",()=>{
    console.log("Server is running at http://localhost:4000")
})