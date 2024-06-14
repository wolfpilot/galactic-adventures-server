import express from "express"

// Routes
import paymentRoutes from "@routes/payment/payment.routes.js"

const router = express.Router()

router.use("/payment", paymentRoutes)

export default router
