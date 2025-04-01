import express from "express"
import mongoose from "mongoose"
import url from "./mongo_url.js"
import cors from "cors"
import router from "./routes/product.route.js"
const app = express()
app.use(express.json())
app.use(cors())

//Database Connection
mongoose.connect(url)
.then(()=>console.log("database connected successfully"))
.catch((err)=>console.log(err))

app.use("/products",router)

app.listen(4000,"localhost",()=>{
    console.log("Server is running at http://localhost:4000")
})