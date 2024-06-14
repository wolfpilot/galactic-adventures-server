import express from "express"

// Controllers
import * as paymentController from "@controllers/payment/payment.controllers.js"

const router = express.Router()

router.get("/", paymentController.paymentGetConfig)
router.post("/", paymentController.paymentCreateIntent)

export default router
