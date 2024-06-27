import express from "express"

// Schemas
import { adventuresGetByIdSchema } from "@api/routes/products/schemas/products.schemas.js"

// Controllers
import * as adventuresController from "@api/controllers/products/adventures.controllers.js"

// Middleware
import { validate } from "@api/middleware/schemaValidator.js"

const router = express.Router()

router.get(
  "/:id",
  validate({ params: adventuresGetByIdSchema }),
  adventuresController.adventuresGetById
)

export default router
