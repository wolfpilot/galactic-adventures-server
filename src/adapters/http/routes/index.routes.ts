import express from "express"

// Routes
import paymentRoutes from "@routes/payment/payment.routes.js"
import productsRoutes from "@routes/products/index.routes.js"
import waypointsRoutes from "@routes/waypoints/waypoints.routes.js"

const router = express.Router()

router.use("/payment", paymentRoutes)
router.use("/products", productsRoutes)
router.use("/waypoints", waypointsRoutes)

export default router
