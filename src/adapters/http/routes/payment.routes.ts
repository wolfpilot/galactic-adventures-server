import express from "express"

import * as paymentController from "@controllers/payment.controllers.js"

const router = express.Router()

router.get("/", paymentController.getConfig)
router.post("/", paymentController.createPayment)

export default router
