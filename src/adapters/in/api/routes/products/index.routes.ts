import express from "express"

// Routes
import productsRoutes from "./products.routes.js"
import adventuresRoutes from "./adventures.routes.js"

const router = express.Router()

router.use("/", productsRoutes)
router.use("/adventures", adventuresRoutes)

export default router
