import express from "express"

// Controllers
import * as adventuresController from "@controllers/products/adventures.controllers.js"

const router = express.Router()

router.get("/", adventuresController.destinationsGetAll)
router.get("/:id", adventuresController.destinationsGetById)

export default router
