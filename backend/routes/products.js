import express from "express";
const router = express.Router();

// Tüm ürünleri getirme (Read -All)
router.get("/",async(req,res)=>{
    res.send("Ürünler getirildi!");
})

export default router;