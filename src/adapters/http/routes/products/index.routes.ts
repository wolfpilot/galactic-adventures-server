import express from "express"

// Routes
import adventuresRoutes from "./adventures.routes.js"

const router = express.Router()

router.use("/adventures", adventuresRoutes)

export default router
