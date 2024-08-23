import express from "express"

// Schemas
import { paymentCreateIntentSchema } from "@api/routes/payment/schemas/payment.schemas.js"

// Controllers
import * as paymentController from "@api/controllers/payment/payment.controllers.js"

// Middleware
import { validate } from "@api/middleware/schemaValidator.js"

const router = express.Router()

router.get("/", paymentController.paymentGetConfig)
router.post(
  "/",
  validate({ body: paymentCreateIntentSchema }),
  paymentController.paymentCreateIntent
)

export default router
