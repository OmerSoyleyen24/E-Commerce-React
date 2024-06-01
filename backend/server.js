import express from "express"
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import mainRoute from "./routes/index.js"
const app = express();
const port = 5000;

configDotenv();

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connect MongoDB")
    } catch (error) {
        throw(error);
    }
}

//middlewares
app.use(express.json( ))

app.use("/api",mainRoute)

app.listen(port,()=>{
    connect();
    console.log(`Sunucu ${port} portunda çalışıyor.`)
})