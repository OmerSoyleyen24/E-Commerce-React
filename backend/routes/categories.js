import express from "express";
const router = express.Router();
import Category from "../models/Category.js";

router.post("/",async(req,res)=>{
    try {
        const {name, img} = req.body;

        const newCategory = new Category({name,img})
        await newCategory.save();

        res.status(200).send("Ok")
    } catch (error) {
        console.log(error)
    }
})

// Tüm Kategorileri getirme (Read -All)
router.get("/",async(req,res)=>{
    res.send("Kategoriler getirildi!");
})

export default router;