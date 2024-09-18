import express from "express"

// Routes
import paymentRoutes from "@api/routes/payment/index.routes.js"
import productsRoutes from "@api/routes/products/index.routes.js"
import waypointsRoutes from "@api/routes/waypoints/index.routes.js"

const router = express.Router()

router.use("/payment", paymentRoutes)
router.use("/products", productsRoutes)
router.use("/waypoints", waypointsRoutes)

export default router
