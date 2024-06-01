import express from "express";
const router = express.Router();

// Diğer rota dosyalarını içe aktarıyoruz.
import productRoute from "./products.js"
import categoryRoute from "./categories.js"


// Her rotayı ilgili yol altında kullanıyoruz
router.use("/products", productRoute)
router.use("/categories", categoryRoute)

export default router