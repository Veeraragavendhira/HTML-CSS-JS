import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
// import route from './routes/UserRoutes.js'

const app=express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT=process.env.PORT || 3143;
const MONGOURL=process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
console.log("mongodb connection success")
app.listen(PORT,()=>{
    console.log(`server port listening at ${PORT}...`)
})
}).catch((err)=>{
    console.log("Error",err.toString())
})