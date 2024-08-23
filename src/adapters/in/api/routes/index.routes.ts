import express from "express"

// Routes
import paymentRoutes from "@api/routes/payment/payment.routes.js"
import productsRoutes from "@api/routes/products/index.routes.js"
import waypointsRoutes from "@api/routes/waypoints/waypoints.routes.js"

const router = express.Router()

router.use("/payment", paymentRoutes)
router.use("/products", productsRoutes)
router.use("/waypoints", waypointsRoutes)

export default router