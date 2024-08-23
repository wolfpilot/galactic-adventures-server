import express from "express"

// Schemas
import { waypointsGetByIdSchema } from "@api/routes/waypoints/schemas/waypoints.schemas.js"

// Controllers
import * as waypointsController from "@api/controllers/waypoints/waypoints.controllers.js"

// Middleware
import { validate } from "@api/middleware/schemaValidator.js"

const router = express.Router()

router.get(
  "/:id",
  validate({ params: waypointsGetByIdSchema }),
  waypointsController.waypointsGetById
)

export default router
