import express from "express"

// Controllers
import * as waypointsController from "@api/controllers/waypoints/waypoints.controllers.js"

const router = express.Router()

router.get("/:id", waypointsController.waypointsGetById)

export default router
