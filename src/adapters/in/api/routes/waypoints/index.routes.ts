import express from "express"

// Routes
import waypointsRoutes from "./waypoints.routes.js"

const router = express.Router()

router.use("/", waypointsRoutes)

export default router
