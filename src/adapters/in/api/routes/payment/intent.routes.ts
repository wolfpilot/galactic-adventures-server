import express from "express"

// Schemas
import { intentCreateSchema } from "@api/routes/payment/schemas/payment.schemas.js"

// Controllers
import * as intentController from "@api/controllers/payment/intent.controllers.js"

// Middleware
import { validate } from "@api/middleware/schemaValidator.js"

const router = express.Router()

router.post(
  "/",
  validate({ body: intentCreateSchema }),
  intentController.intentCreate
)

export default router
