import express from "express"

// Routes
import productsRoutes from "@routes/products/index.routes.js"
import paymentRoutes from "@routes/payment/payment.routes.js"

const router = express.Router()

router.use("/products", productsRoutes)
router.use("/payment", paymentRoutes)

export default router
