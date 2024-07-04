import express from "express"

// Schemas
import { productsGetByTypeAndIdSchema } from "@api/routes/products/schemas/products.schemas.js"

// Controllers
import * as productsController from "@api/controllers/products/products.controllers.js"

// Middleware
import { validate } from "@api/middleware/schemaValidator.js"

const router = express.Router()

router.get(
  "/",
  validate({ query: productsGetByTypeAndIdSchema }),
  productsController.productsGetByTypeAndId
)

export default router
