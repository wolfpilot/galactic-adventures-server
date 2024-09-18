import express from "express"

// Routes
import paymentRoutes from "./payment.routes.js"
import intentRoutes from "./intent.routes.js"

const router = express.Router()

router.use("/", paymentRoutes)
router.use("/intent", intentRoutes)

export default router
