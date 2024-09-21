import express from "express"

// Controllers
import * as paymentController from "@api/controllers/payment/payment.controllers.js"

const router = express.Router()

router.get("/", paymentController.paymentGetConfig)

export default router
