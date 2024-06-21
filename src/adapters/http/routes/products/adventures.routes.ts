import express from "express"

// Controllers
import * as adventuresController from "@controllers/products/adventures.controllers.js"

const router = express.Router()

router.get("/:id", adventuresController.adventuresGetById)

export default router
